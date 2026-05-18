<template>
  <UContainer class="py-8">
    <h1 class="text-xl font-bold mb-6">{{ $t("pages.newrecords.title") }}</h1>

    <USeparator class="mb-5" />
    <UTable :data="ScoreRecords" :columns="columns" class="flex-1" />
  </UContainer>
</template>

<script setup>
import { h, resolveComponent } from "vue";
import { useGames } from "~/composables/Games";
import { useNewScoreRecords } from "~/composables/NewScoreRecords";
const { t, locale } = useI18n();

const gamesMap = useGames();

import { computed } from "vue";

const allRecords = useNewScoreRecords();
const ScoreRecords = computed(() => allRecords.slice(0, 30));


// テーブル定義
const UBadge = resolveComponent("UBadge");
const UButton = resolveComponent("UButton");
const columns = [
  {
    accessorKey: "game",
    header: t("global.table_headers.game"),
    cell: ({ row }) => {
      return h(
        UBadge,
        {
          // 形状は Tailwind、色は動的に style で上書き
          class: "capitalize inline-block px-2 py-0.5 rounded font-semibold",
          style: {
            color: gamesMap[row.getValue("game")].color.txt,
            backgroundColor: gamesMap[row.getValue("game")].color.bg,
          },
        },
        () => t(gamesMap[row.getValue("game")].name)
      );
    },
  },
  {
    accessorKey: "score",
    header: t("global.table_headers.score"),
    cell: ({ row }) => {
      return new Number(row.getValue("score")).toLocaleString(locale.value);
    },
  },
  {
    accessorKey: "shot_type",
    header: t("global.table_headers.shot_type"),
    cell: ({ row }) => {
      return t(
        gamesMap[row.getValue("game")].shot_types[row.getValue("shot_type")]
          .name
      );
    },
  },
  {
    accessorKey: "status",
    header: t("global.table_headers.status"),
    cell: ({ row }) => {
      const color = {
        excellent: "success",
        great: "secondary",
        good: "info",
      }[row.getValue("status")];

      const txt = {
        excellent: t("global.threshold_score_names.excellent"),
        great: t("global.threshold_score_names.great"),
        good: t("global.threshold_score_names.good"),
      }[row.getValue("status")];

      return h(
        UBadge,
        { class: "capitalize", variant: "subtle", color },
        () => txt
      );
    },
  },
  {
    accessorKey: "player",
    header: t("global.table_headers.player"),
    cell: ({ row }) => row.getValue("player"),
  },
  {
    accessorKey: "date",
    header: t("global.table_headers.publish_date"),
    cell: ({ row }) => {
      return new Date(row.getValue("date")).toLocaleString(locale.value, {
        year: "numeric",
        day: "2-digit",
        month: "2-digit",
      });
    },
  },
  {
    accessorKey: "replay",
    header: t("global.table_headers.replay"),
    cell: ({ row }) => {
      if (row.getValue("replay") === null) {
        return "N/A";
      }
      return h(
        "a",
        {
          href: `https://balisman.github.io/replays/${row.getValue(
            "game"
          )}/${row.getValue("replay")}`,
          download: row.getValue("replay"),
          target: "_blank",
          rel: "noopener noreferrer",
          class: "text-primary underline hover:text-primary-600",
        },
        row.getValue("replay")
      );
    },
  },
  {
    accessorKey: "detail",
    header: t("global.table_headers.note"),
    cell: ({ row }) => row.getValue("detail"),
  },
];
</script>