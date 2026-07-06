<template>
  <UContainer>
    <UCard class="my-5">
      <template #header>
        <h1 class="text-xl font-bold">{{ $t("pages.index.welcome") }}</h1>
      </template>

      <SafeI18nT keypath="pages.index.description" tag="p">
        <template #br>
          <br />
        </template>
      </SafeI18nT>

      <template #footer>
        <p class="text-sm mb-1 font-medium">
          {{ $t("pages.index.latest_update") }}
          <span class="text-primary-600 dark:text-primary-400 font-semibold">
            v{{ latest.version }}
          </span>
          <span class="text-xs text-gray-500 ml-1">
            {{ fmtDate(latest.date) }}
          </span>
        </p>

        <!-- 変更点リスト -->
        <ul class="list-disc pl-5 space-y-1">
          <li v-for="(change, idx) in latest.changes" :key="idx">
            {{ renderChange(change) }}
          </li>
        </ul>
      </template>
    </UCard>

    <div class="grid grid-cols-12 gap-4 my-5">
      <!-- 左側（UInput + UButton） -->
      <div class="col-span-12 md:col-span-6 flex gap-2">
        <UInput
          :placeholder="$t('pages.index.placeholder_player')"
          class="flex-1 max-w-[12rem]"
          v-model="inputtedPlayer"
          @keydown.enter="searchPlayer"
        />
        <UButton
          icon="i-lucide-search"
          size="md"
          color="primary"
          variant="solid"
          @click="searchPlayer"
        />
      </div>

      <!-- 右側（USelect x2） -->
      <div class="col-span-12 md:col-span-6 flex gap-2">
        <USelect
          class="w-1/2"
          v-model="selectedGameId"
          :items="gameOptions"
          :placeholder="$t('pages.index.placeholder_game')"
        />
        <USelect
          class="w-1/2"
          v-model="selectedShotTypeId"
          :items="shotTypeOptions"
          :placeholder="$t('pages.index.placeholder_shot_type')"
        />
      </div>
    </div>

    <USeparator class="mb-5" />
    <UTable :key="tableKey" ref="table" :data="scoreRecords" :columns="columns" class="flex-1" />
  </UContainer>
</template>

<script setup lang="ts">
import { h, resolveComponent } from "vue";
import { useGames } from "~/composables/Games";
import { useScoreRecords } from "~/composables/ScoreRecords";
import { UseReleases, type ReleaseChange } from "~/composables/ReleaseNotes";
import { useI18n } from "vue-i18n";

//型定義
type Status = "excellent" | "great" | "good";

// composables
const inputtedPlayer = ref("");
const selectedPlayer = ref("");
const selectedGameId = ref("");
const selectedShotTypeId = ref("");
const gamesMap = useGames();
const scoreRecordMap = useScoreRecords();
const latest = UseReleases()[0];
const { t, locale } = useI18n();

// ✅ SSR安全なロケール取得関数
function getLocale(): 'ja' | 'en' {
  if (process.server) return 'ja';
  const val = typeof locale === 'string' ? locale : locale.value;
  return val === 'ja' || val === 'en' ? val : 'ja';
}

// ✅ 日付フォーマット（SSR対応）
function fmtDate(dateStr: string) {
  if (process.server) return new Date(dateStr).toISOString().slice(0, 10);
  return new Intl.DateTimeFormat(getLocale(), { dateStyle: "medium" }).format(new Date(dateStr));
}

function shotKey(s: string) {
  // ReimuO -> reimu_o のように変換
  return s
    .replace(/([A-Z]+)(\d*)$/, (_, char, num) => `_${char.toLowerCase()}${num || ''}`)
    .replace(/^([A-Za-z]+)/, (_, name) => name.toLowerCase());
}

// ✅ 変更点描画関数（updates.vue と共通）
function renderChange(change: ReleaseChange, currentLocale?: 'ja' | 'en') {
  const loc = currentLocale ?? getLocale();

  // SSR側では簡易表示
  if (process.server) {
    if (change.type === 'tpl') {
      if (change.id === 'add_record' || change.id === 'modify_record') {
        let playerName: string;
        if (typeof change.player === 'string') {
          playerName = change.player;
        } else if (change.player && typeof change.player === 'object') {
          const p = change.player as Record<string, string>;
          playerName = p[loc] ?? p.ja ?? p.en ?? '';
        } else {
          playerName = '';
        }
        return `${change.id} : ${change.game} ${change.shot} ${playerName}`;
      }
      return change.id;
    }
    if (change.type === 'text') {
      return change.text['ja'] ?? Object.values(change.text)[0] ?? '';
    }
    return '';
  }

  // ---- ブラウザ側 ----
  if (change.type === 'tpl') {
    const actionText = t(`ReleaseNotes.${change.id}`);

    if (change.id === 'add_record' || change.id === 'modify_record') {
      // プレイヤー名
      let playerName: string;
      if (typeof change.player === 'string') {
        playerName = change.player;
      } else if (change.player && typeof change.player === 'object') {
        const p = change.player as Record<string, string>;
        playerName = p[loc] ?? p.ja ?? p.en ?? '';
      } else {
        playerName = '';
      }

      // ゲーム名（th07EX / th07Ph の例外対応）
      let gameKey = change.game;
      let gameTitle = '';
      switch (change.game) {
        case 'th07EX':
          gameTitle = t('composables.Games.th07.title.ex');
          gameKey = 'th07';
          break;
        case 'th07Ph':
          gameTitle = t('composables.Games.th07.title.ph');
          gameKey = 'th07';
          break;
        default:
          gameTitle = t(`composables.Games.${change.game}.title`);
          break;
      }

      // ショット名（複数対応）
      const shotNames = change.shot
        .split('/')
        .map(s => t(`composables.Games.${gameKey}.shot_types.${shotKey(s)}`))
        .join('/');

      return `${actionText} : ${gameTitle} ${shotNames} ${playerName}`;
    }

    // add_record / modify_record 以外の tpl
    return actionText;
  }

  if (change.type === 'text') {
    return (
      change.text[loc] ??
      change.text['ja'] ??
      change.text['en'] ??
      Object.values(change.text)[0] ??
      ''
    );
  }

  return '';
}

// ✅ セレクトボックス項目
const gameOptions = computed(() =>
  Object.entries(gamesMap).map(([id, game]) => ({
    label: t(game.name),
    value: id,
  }))
);

const shotTypeOptions = computed(() => {
  if (!selectedGameId.value) return [];
  const game = gamesMap[selectedGameId.value];
  const arr = Object.entries(game.shot_types).map(([id, st]) => ({
    label: t(st.name),
    value: id,
  }));
  arr.unshift({ label: t("pages.index.all_shot_types"), value: "all" });
  return arr;
});

// ✅ テーブルデータ
const scoreRecords = computed(() => {
  let returning: any[] = [];

  // プレイヤー指定モード
  if (selectedPlayer.value !== "") {
    const playerRecords = scoreRecordMap[selectedPlayer.value];
    if (!playerRecords) return [];

    Object.entries(playerRecords).forEach(([gameId, shotTypeRecords]) => {
      Object.entries(shotTypeRecords).forEach(([shotTypeId, record]) => {
        returning.push({
          game: gameId,
          rank: "-",
          score: record.score,
          shot_type: shotTypeId,
          status: record.status,
          player: selectedPlayer.value,
          date: record.date,
          replay: record.replay,
          detail: record.detail,
        });
      });
    });
    return returning;
  }

  // ゲーム指定モード
  if (!selectedGameId.value) return [];

  Object.entries(scoreRecordMap).forEach(([player, games]) => {
    const game = games[selectedGameId.value];
    if (!game) return;

    Object.entries(game).forEach(([shotTypeId, record]) => {
      if (
        !selectedShotTypeId.value ||
        selectedShotTypeId.value === "all" ||
        selectedShotTypeId.value === shotTypeId
      ) {
        returning.push({
          game: selectedGameId.value,
          score: record.score,
          shot_type: shotTypeId,
          player,
          status: record.status,
          date: record.date,
          replay: record.replay,
          detail: record.detail,
        });
      }
    });
  });

  // ステータス優先ソート（excellent → great → good）、同ステータス内はスコア降順
  const statusOrder: Record<Status, number> = {
    excellent: 3,
    great: 2,
    good: 1,
  };

  // デフォルト表示はスコア降順
  returning.sort((a, b) => b.score - a.score);

  // ランク付け
  returning.forEach((item, index) => (item.rank = index + 1));

  return returning;
});

const tableKey = ref(0);

watch(scoreRecords, () => {
  // 既存ソートをリセットするためにテーブルを再描画
  tableKey.value++;
});


// ✅ テーブル列定義
const UBadge = resolveComponent("UBadge");
const UButton = resolveComponent("UButton");
const table = ref<any>(null); // UTable の ref

import { reactive, watch, nextTick } from "vue"; // nextTick もここでインポート

const columns = reactive([
  {
    accessorKey: "game",
    header: t("global.table_headers.game"),
    cell: ({ row }: { row: any }) =>
      h(
        UBadge,
        {
          class: "capitalize inline-block px-2 py-0.5 rounded font-semibold",
          style: {
            color: gamesMap[row.getValue("game")]?.color?.txt ?? "#000",
            backgroundColor: gamesMap[row.getValue("game")]?.color?.bg ?? "#fff",
          },
        },
        () => t(gamesMap[row.getValue("game")]?.name ?? "")
      ),
  },
  {
    accessorKey: "rank",
    header: t("global.table_headers.rank"),
    cell: ({ row }: { row: any }) => row.getValue("rank"),
  },
  {
    accessorKey: "score",
    header: ({ column }: { column: any }) => {
      const sortState = column.getIsSorted(); // false / 'asc' / 'desc'

      // アイコン決定
      const icon = sortState === false
        ? "i-lucide-arrow-up-down"           // デフォルト未ソート
        : sortState === "asc"
        ? "i-lucide-arrow-up-narrow-wide"    // 昇順
        : "i-lucide-arrow-down-wide-narrow"; // 降順

      return h(UButton, {
        color: "neutral",
        variant: "ghost",
        label: t("global.table_headers.score"),
        icon,
        class: "-mx-2.5",
        onClick: () => {
          if (sortState === false) {
            // デフォルト状態 → 降順スタート
            column.toggleSorting(false); // false = 降順
          } else {
            // 昇順 / 降順切替
            column.toggleSorting(sortState === "asc"); // asc → desc, desc → asc
          }
        },
      });
    },
    cell: ({ row }: { row: any }) =>
      new Number(row.getValue("score")).toLocaleString(getLocale()),
  },
  {
    accessorKey: "shot_type",
    header: t("global.table_headers.shot_type"),
    cell: ({ row }: { row: any }) => {
      const gameId = row.original.game;
      const shotId = row.original.shot_type;
      const game = gamesMap[gameId];
      if (!game || !game.shot_types[shotId]) return shotId;
      return t(game.shot_types[shotId].name);
    },
  },
  {
    accessorKey: "status",
    header: ({ column }: { column: any }) =>
      h(UButton, {
        color: "neutral",
        variant: "ghost",
        label: t("global.table_headers.status"),
        icon: column.getIsSorted()
          ? column.getIsSorted() === "asc"
            ? "i-lucide-arrow-down-wide-narrow"
            : "i-lucide-arrow-up-narrow-wide"
          : "i-lucide-arrow-up-down",
        class: "-mx-2.5",
        onClick: () => {
          const current = column.getIsSorted();
          if (!current) {
            column.toggleSorting(false); // 初回クリックは降順
          } else {
            column.toggleSorting(current === "asc"); // 昇順/降順切替
          }
        },
      }),
    cell: ({ row }: { row: any }) => {
      const status = row.getValue("status") as "excellent" | "great" | "good";
      const colorMap: Record<Status, string> = {
        excellent: "success",
        great: "secondary",
        good: "info",
      };
      const txtMap: Record<Status, string> = {
        excellent: t("global.threshold_score_names.excellent"),
        great: t("global.threshold_score_names.great"),
        good: t("global.threshold_score_names.good"),
      };
      return h(
        UBadge,
        { class: "capitalize", variant: "subtle", color: colorMap[status] },
        () => txtMap[status]
      );
    },

    // ステータス順ソート（同ステータス内はゲームID昇順）
    sortingFn: (rowA: any, rowB: any): number => {
      const order: Record<Status, number> = { excellent: 3, great: 2, good: 1 };
      const statusA = rowA.original.status as Status;
      const statusB = rowB.original.status as Status;

      // ステータス順（降順：excellent → great → good）
      const statusDiff = order[statusB] - order[statusA];
      if (statusDiff !== 0) return statusDiff;
      // ステータス逆順時に表示上ゲームIDが反転するが実用上問題ないので対応はしない

      // 同ステータス内はゲームID昇順
      if (rowA.original.game < rowB.original.game) return -1;
      if (rowA.original.game > rowB.original.game) return 1;
      return 0;
    },
  },
  {
    accessorKey: "player",
    header: t("global.table_headers.player"),
    cell: ({ row }: { row: any }) => {
      const playerName = row.getValue("player");
      return h(
        "span",
        {
          class: "cursor-pointer text-primary underline hover:text-primary-600",
          onClick: () => {
            // 検索欄に値をセットして検索モードに切替
            inputtedPlayer.value = playerName;
            selectedPlayer.value = playerName;
            selectedGameId.value = ""; // ゲーム選択モードを解除
          },
        },
        playerName
      );
    },
  },
  {
    accessorKey: "date",
    header: ({ column }: { column: any }) =>
      h(UButton, {
        color: "neutral",
        variant: "ghost",
        label: t("global.table_headers.date"),
        icon: column.getIsSorted()
          ? column.getIsSorted() === "asc"
            ? "i-lucide-arrow-up-narrow-wide"
            : "i-lucide-arrow-down-wide-narrow"
          : "i-lucide-arrow-up-down",
        class: "-mx-2.5",
        onClick: () => {
          const current = column.getIsSorted();
          if (!current) {
            // 未ソート状態なら降順でスタート
            column.toggleSorting(true);
          } else {
            // 既にソート済みなら通常切替
            column.toggleSorting(current === "asc");
          }
        },
      }),
    cell: ({ row }: { row: any }) =>
      new Date(row.getValue("date")).toLocaleDateString(getLocale(), {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }),
    sortingFn: (rowA: any, rowB: any) => {
      const dateA = new Date(rowA.original.date).getTime();
      const dateB = new Date(rowB.original.date).getTime();
      return dateA - dateB;
    },
  },
  {
    accessorKey: "replay",
    header: t("global.table_headers.replay"),
    cell: ({ row }: { row: any }) => {
      const replay = row.getValue("replay");
      if (!replay) return "N/A";
      const game = row.getValue("game");
      return h(
        "a",
        {
          href: `https://balisman.github.io/replays/${game}/${replay}`,
          download: replay,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "text-primary underline hover:text-primary-600",
        },
        replay
      );
    },
  },
  {
    accessorKey: "detail",
    header: t("global.table_headers.note"),
  },
]);

// ✅ ゲーム選択切替時の処理
watch(selectedGameId, (newGameId) => {
  if (newGameId !== "") {
    // プレイヤー検索をリセット
    inputtedPlayer.value = "";
    selectedPlayer.value = "";

    // ショットタイプの初期化
    const game = gamesMap[newGameId];
    if (game && game.shot_types) {
      // "all" をデフォルトにする場合
      selectedShotTypeId.value = "all";

      // もしくは最初のショットタイプをデフォルトにする場合は下記を使用：
      // const firstShotType = Object.keys(game.shot_types)[0];
      // selectedShotTypeId.value = firstShotType ?? "";
    } else {
      // ゲームが無効な場合はショットタイプもリセット
      selectedShotTypeId.value = "";
    }
  } else {
    // ゲーム選択が解除された場合もショットタイプをリセット
    selectedShotTypeId.value = "";
  }
});

const searchPlayer = () => {
  selectedGameId.value = "";
  selectedPlayer.value = inputtedPlayer.value;
};

// ✅ SEO
useSeoMeta({
  title: "東方EXTRAスコアボード – 東方スコアタリプレイ掲載",
  description: "東方Project原作STGのEXTRAモードで基準値以上のスコアのリプレイを記載",
  ogImage: "/ogp/twittercard.png",
  twitterCard: "summary_large_image",
});
</script>
