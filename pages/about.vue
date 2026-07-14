<template>
  <UContainer class="py-8">
    <h1 class="text-xl font-bold mb-6">{{ $t("pages.about.title") }}</h1>
    <UCard class="my-5">
      <template #header>
        <p>{{ $t("pages.about.intro.title") }}</p>
      </template>
      <p class="whitespace-pre-line">{{ $t("pages.about.intro.content") }}</p>
    </UCard>

    <UCard class="my-5">
      <template #header>
        <p>{{ $t("pages.about.publish_record.title") }}</p>
      </template>
      <SafeI18nT keypath="pages.about.publish_record.content" tag="p">
        <template #silentselene>
          <NuxtLink href="https://www.silentselene.net/" target="_blank">
            {{ $t("pages.about.publish_record.tags.silentselene") }}
          </NuxtLink>
        </template>
        <template #balisman>
          <NuxtLink href="https://github.com/Balisman" target="_blank">
            {{ $t("pages.about.publish_record.tags.balisman") }}
          </NuxtLink>
        </template>
        <template #br>
          <br />
        </template>
      </SafeI18nT>
    </UCard>

    <UCard class="my-5">
      <template #header>
        <p>{{ $t("pages.about.using_tools.title") }}</p>
      </template>
      <SafeI18nT keypath="pages.about.using_tools.content" tag="p">
        <template #br>
          <br />
        </template>
      </SafeI18nT>
    </UCard>

    <UCard class="my-5">
      <template #header>
        <p>{{ $t("pages.about.compatible_games.title") }}</p>
      </template>
      <ul class="flex flex-wrap gap-4 justify-center">
        <li v-for="gameThreshold in gameThresholds" :key="gameThreshold.game">
          <UBadge
            class="capitalize inline-block px-2 py-0.5 rounded font-semibold text-lg"
            :style="{
              color: gamesMap[gameThreshold.game].color.txt,
              backgroundColor: gamesMap[gameThreshold.game].color.bg,
            }"
          >
            {{ $t(gamesMap[gameThreshold.game].name) }}
          </UBadge>
        </li>
      </ul>
    </UCard>

    <!-- GOOD -->
    <div class="flex items-stretch">
      <UCard class="my-5">
        <template #header>
          <p>
            <UBadge class="capitalize" variant="subtle" color="info">
              {{ $t("global.threshold_score_names.good") }}
            </UBadge>
            {{ $t("pages.about.threshold_scores.title") }}
          </p>
        </template>
        <ul class="pl-3 space-y-0.5">
          <li v-for="gameThreshold in gameThresholds" :key="gameThreshold.game">
            <UBadge
              class="capitalize inline-block px-2 py-0.5 rounded font-semibold"
              :style="{
                color: gamesMap[gameThreshold.game].color.txt,
                backgroundColor: gamesMap[gameThreshold.game].color.bg,
              }"
            >
              {{ $t(gamesMap[gameThreshold.game].name) }}
            </UBadge>
            ：{{ $t(`pages.about.thresholds.${gameThreshold.game}.good`) }}
          </li>
        </ul>
      </UCard>

      <UCard class="my-5">
        <template #header>
          <p>
            <UBadge class="capitalize" variant="subtle" color="secondary">
              {{ $t("global.threshold_score_names.great") }}
            </UBadge>
            {{ $t("pages.about.threshold_scores.title") }}
          </p>
        </template>
        <ul class="pl-3 space-y-0.5">
          <li v-for="gameThreshold in gameThresholds" :key="gameThreshold.game">
            <UBadge
              class="capitalize inline-block px-2 py-0.5 rounded font-semibold"
              :style="{
                color: gamesMap[gameThreshold.game].color.txt,
                backgroundColor: gamesMap[gameThreshold.game].color.bg,
              }"
            >
              {{ $t(gamesMap[gameThreshold.game].name) }}
            </UBadge>
            ：{{ $t(`pages.about.thresholds.${gameThreshold.game}.great`) }}
          </li>
        </ul>
      </UCard>

      <UCard class="my-5">
        <template #header>
          <p>
            <UBadge variant="subtle" color="success">
              {{ $t("global.threshold_score_names.excellent") }}
            </UBadge>
            {{ $t("pages.about.threshold_scores.title") }}
          </p>
        </template>
        <ul class="pl-3 space-y-0.5">
          <li v-for="gameThreshold in gameThresholds" :key="gameThreshold.game">
            <UBadge
              class="capitalize inline-block px-2 py-0.5 rounded font-semibold"
              :style="{
                color: gamesMap[gameThreshold.game].color.txt,
                backgroundColor: gamesMap[gameThreshold.game].color.bg,
              }"
            >
              {{ $t(gamesMap[gameThreshold.game].name) }}
            </UBadge>
            ：{{ $t(`pages.about.thresholds.${gameThreshold.game}.excellent`) }}
          </li>
        </ul>
      </UCard>
    </div>
    <UCard class="my-5">
      <template #header>
        <p>
          <UBadge class="capitalize" variant="subtle" color="info">
            {{ $t("global.threshold_score_names.good") }}
          </UBadge>
          {{ $t("pages.about.threshold_score_policy.title") }}
        </p>
      </template>
      <SafeI18nT
        keypath="pages.about.threshold_score_policy.good.content"
        tag="p"
      >
        <template #br>
          <br />
        </template>
      </SafeI18nT>
      <ul class="list-disc pl-5 space-y-0.5">
        <li>
          {{
            $t(
              "pages.about.threshold_score_policy.good.condition_lists.not_nnfs",
            )
          }}
        </li>
        <li>
          {{
            $t(
              "pages.about.threshold_score_policy.good.condition_lists.for_beginners",
            )
          }}
        </li>
        <li>
          {{
            $t(
              "pages.about.threshold_score_policy.good.condition_lists.for_experienced",
            )
          }}
        </li>
      </ul>
    </UCard>

    <UCard class="my-5">
      <template #header>
        <p>
          <UBadge class="capitalize" variant="subtle" color="info">
            {{ $t("global.threshold_score_names.good") }}
          </UBadge>
          {{ $t("pages.about.score_FAQ.title") }}
        </p>
      </template>
      <ul class="pl-5 space-y-0.5">
        <li>
          {{
            $t(
              "pages.about.score_FAQ.good.content.lists.th20_fixed_piv.question",
            )
          }}
        </li>
        <li>
          {{
            $t("pages.about.score_FAQ.good.content.lists.th20_fixed_piv.answer")
          }}
        </li>

        <li>
          {{
            $t(
              "pages.about.score_FAQ.good.content.lists.garbage_shot_type.question",
            )
          }}
        </li>
        <li>
          {{
            $t(
              "pages.about.score_FAQ.good.content.lists.garbage_shot_type.answer",
            )
          }}
        </li>
        <li>
          {{
            $t(
              "pages.about.score_FAQ.good.content.lists.win98_support.question",
            )
          }}
        </li>
        <li>
          {{
            $t("pages.about.score_FAQ.good.content.lists.win98_support.answer")
          }}
        </li>

        <li>
          {{
            $t("pages.about.score_FAQ.good.content.lists.th09_support.question")
          }}
        </li>
        <li>
          {{
            $t("pages.about.score_FAQ.good.content.lists.th09_support.answer")
          }}
        </li>

        <li>
          {{
            $t(
              "pages.about.score_FAQ.good.content.lists.publish_my_record.question",
            )
          }}
        </li>
        <SafeI18nT
          keypath="pages.about.score_FAQ.good.content.lists.publish_my_record.answer"
          tag="li"
        >
          <template #github>
            <NuxtLink
              href="https://github.com/Balisman/balisman.github.io/issues"
              target="_blank"
            >
              {{
                $t(
                  "pages.about.score_FAQ.good.content.lists.publish_my_record.tags.github",
                )
              }}
            </NuxtLink>
          </template>
          <template #balisman>
            <NuxtLink href="https://github.com/Balisman" target="_blank">
              {{
                $t(
                  "pages.about.score_FAQ.good.content.lists.publish_my_record.tags.balisman",
                )
              }}
            </NuxtLink>
          </template>
        </SafeI18nT>
        <li>
          {{
            $t(
              "pages.about.score_FAQ.good.content.lists.update_frequency.question",
            )
          }}
        </li>
        <li>
          {{
            $t(
              "pages.about.score_FAQ.good.content.lists.update_frequency.answer",
            )
          }}
        </li>

        <li>
          {{
            $t(
              "pages.about.score_FAQ.good.content.lists.recommendation.question",
            )
          }}
        </li>
        <li>
          {{
            $t("pages.about.score_FAQ.good.content.lists.recommendation.answer")
          }}
        </li>
      </ul>
    </UCard>

    <!-- GREAT -->

    <UCard class="my-5">
      <template #header>
        <p>
          <UBadge class="capitalize" variant="subtle" color="secondary">
            {{ $t("global.threshold_score_names.great") }}
          </UBadge>
          {{ $t("pages.about.threshold_score_policy.title") }}
        </p>
      </template>

      <SafeI18nT
        keypath="pages.about.threshold_score_policy.great.content"
        tag="p"
      >
        <template #br>
          <br />
        </template>
      </SafeI18nT>
    </UCard>

    <UCard class="my-5">
      <template #header>
        <p>
          <UBadge class="capitalize" variant="subtle" color="secondary">
            {{ $t("global.threshold_score_names.great") }}
          </UBadge>
          {{ $t("pages.about.score_FAQ.title") }}
        </p>
      </template>
      <ul class="pl-5 space-y-0.5">
        <li>
          {{
            $t(
              "pages.about.score_FAQ.great.content.lists.score_decrease.question",
            )
          }}
        </li>
        <li>
          {{
            $t(
              "pages.about.score_FAQ.great.content.lists.score_decrease.answer",
            )
          }}
        </li>
      </ul>
    </UCard>

    <!-- EXCELLENT -->

    <UCard class="my-5">
      <template #header>
        <p>
          <UBadge class="capitalize" variant="subtle" color="success">
            {{ $t("global.threshold_score_names.excellent") }}
          </UBadge>
          {{ $t("pages.about.threshold_score_policy.title") }}
        </p>
      </template>

      <SafeI18nT
        keypath="pages.about.threshold_score_policy.excellent.content"
        tag="p"
      >
        <template #br>
          <br />
        </template>
      </SafeI18nT>
    </UCard>

    <UCard class="my-5">
      <template #header>
        <p>
          <UBadge class="capitalize" variant="subtle" color="success">
            {{ $t("global.threshold_score_names.excellent") }}
          </UBadge>
          {{ $t("pages.about.score_FAQ.title") }}
        </p>
      </template>
      <ul class="pl-5 space-y-0.5">
        <li>
          {{
            $t(
              "pages.about.score_FAQ.excellent.content.lists.score_decrease.question",
            )
          }}
        </li>
        <li>
          {{
            $t(
              "pages.about.score_FAQ.excellent.content.lists.score_decrease.answer",
            )
          }}
        </li>
        <li>
          {{
            $t(
              "pages.about.score_FAQ.excellent.content.lists.difficulty_gap.question",
            )
          }}
        </li>
        <li>
          {{
            $t(
              "pages.about.score_FAQ.excellent.content.lists.difficulty_gap.answer",
            )
          }}
        </li>
      </ul>
    </UCard>

    <UCard class="my-5">
      <template #header>
        <p>{{ $t("pages.about.additional_info.title") }}</p>
      </template>
      <SafeI18nT keypath="pages.about.additional_info.content" tag="p">
        <template #br>
          <br />
        </template>
      </SafeI18nT>
    </UCard>

    <UCard class="my-5">
      <template #header>
        <p>{{ $t("pages.about.operator.title") }}</p>
      </template>

      <SafeI18nT keypath="pages.about.operator.content" tag="p">
        <template #br>
          <br />
        </template>
        <template #balisman>
          <NuxtLink href="https://github.com/Balisman" target="_blank">
            {{ $t("pages.about.operator.tags.balisman") }}
          </NuxtLink>
        </template>
      </SafeI18nT>
    </UCard>
    <UCard class="my-5">
      <template #header>
        <p>{{ $t("pages.about.operation_policy.title") }}</p>
      </template>

      <SafeI18nT keypath="pages.about.operation_policy.content" tag="p">
        <template #br>
          <br />
        </template>
        <template #wefmaika>
          <NuxtLink href="https://wefma.net" target="_blank">
            {{ $t("pages.about.operation_policy.tags.wefmaika") }}
          </NuxtLink>
        </template>
        <template #nyanko>
          <NuxtLink href="https://x.com/flower874_" target="_blank">
            {{ $t("pages.about.operation_policy.tags.nyanko") }}
          </NuxtLink>
        </template>
        <template #balisman>
          <NuxtLink href="https://github.com/Balisman" target="_blank">
            {{ $t("pages.about.operation_policy.tags.balisman") }}
          </NuxtLink>
        </template>
        <template #github>
          <NuxtLink
            href="https://github.com/Balisman/balisman.github.io"
            target="_blank"
          >
            {{ $t("pages.about.operation_policy.tags.github") }}
          </NuxtLink>
        </template>
      </SafeI18nT>
    </UCard>
  </UContainer>
</template>

<script setup lang="ts">
import { useGames } from "#imports";
const gamesMap = useGames();

const gameThresholds: Ref<
  Array<{ game: string; great: string; good: string }>
> = ref([
  {
    game: "th06",
    excellent: "pages.about.thresholds.th06.excellent",
    great: "pages.about.thresholds.th06.great",
    good: "pages.about.thresholds.th06.good",
  },
  {
    game: "th07Ex",
    excellent: "pages.about.thresholds.th07_ex.excellent",
    great: "pages.about.thresholds.th07_ex.great",
    good: "pages.about.thresholds.th07_ex.good",
  },
  {
    game: "th07Ph",
    excellent: "pages.about.thresholds.th07_ph.excellent",
    great: "pages.about.thresholds.th07_ph.great",
    good: "pages.about.thresholds.th07_ph.good",
  },
  {
    game: "th08",
    excellent: "pages.about.thresholds.th08.excellent",
    great: "pages.about.thresholds.th08.great",
    good: "pages.about.thresholds.th08.good",
  },
  {
    game: "th10",
    excellent: "pages.about.thresholds.th10.excellent",
    great: "pages.about.thresholds.th10.great",
    good: "pages.about.thresholds.th10.good",
  },
  {
    game: "th11",
    excellent: "pages.about.thresholds.th11.excellent",
    great: "pages.about.thresholds.th11.great",
    good: "pages.about.thresholds.th11.good",
  },
  {
    game: "th12",
    excellent: "pages.about.thresholds.th12.excellent",
    great: "pages.about.thresholds.th12.great",
    good: "pages.about.thresholds.th12.good",
  },
  {
    game: "th128",
    excellent: "pages.about.thresholds.th128.excellent",
    great: "pages.about.thresholds.th128.great",
    good: "pages.about.thresholds.th128.good",
  },
  {
    game: "th13",
    excellent: "pages.about.thresholds.th13.excellent",
    great: "pages.about.thresholds.th13.great",
    good: "pages.about.thresholds.th13.good",
  },
  {
    game: "th14",
    excellent: "pages.about.thresholds.th14.excellent",
    great: "pages.about.thresholds.th14.great",
    good: "pages.about.thresholds.th14.good",
  },
  {
    game: "th15",
    excellent: "pages.about.thresholds.th15.excellent",
    great: "pages.about.thresholds.th15.great",
    good: "pages.about.thresholds.th15.good",
  },
  {
    game: "th16",
    excellent: "pages.about.thresholds.th16.excellent",
    great: "pages.about.thresholds.th16.great",
    good: "pages.about.thresholds.th16.great",
  },
  {
    game: "th17",
    excellent: "pages.about.thresholds.th17.excellent",
    great: "pages.about.thresholds.th17.great",
    good: "pages.about.thresholds.th17.good",
  },
  {
    game: "th18",
    excellent: "pages.about.thresholds.th18.excellent",
    great: "pages.about.thresholds.th18.great",
    good: "pages.about.thresholds.th08.good",
  },
  {
    game: "th20",
    excellent: "pages.about.thresholds.th20.excellent",
    great: "pages.about.thresholds.th20.great",
    good: "pages.about.thresholds.th20.good",
  },
]);
</script>
