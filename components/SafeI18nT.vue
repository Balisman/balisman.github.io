<script lang="ts">
import {
  cloneVNode,
  defineComponent,
  h,
  type Component,
  type PropType,
  type VNodeChild,
} from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "SafeI18nT",
  inheritAttrs: false,
  props: {
    keypath: {
      type: String,
      required: true,
    },
    tag: {
      type: [String, Object, Function] as PropType<string | Component>,
      default: "span",
    },
  },
  setup(props, { attrs, slots }) {
    const { rt, tm } = useI18n({ useScope: "global" });

    return () => {
      const translated = tm(props.keypath);
      const placeholders = Object.fromEntries(
        Object.keys(slots).map((name) => [name, "{" + name + "}"]),
      );
      const message =
        typeof translated === "string"
          ? translated
          : rt(translated, placeholders);

      if (typeof message !== "string") {
        return h(props.tag, attrs, props.keypath);
      }

      const children: VNodeChild[] = [];
      const placeholderPattern = /\{([A-Za-z_][\w-]*)\}/g;
      let cursor = 0;
      let occurrence = 0;

      for (const match of message.matchAll(placeholderPattern)) {
        const index = match.index;
        const placeholder = match[0];
        const name = match[1];

        if (index > cursor) {
          children.push(message.slice(cursor, index));
        }

        const slot = slots[name];
        if (slot) {
          const slotOccurrence = occurrence++;
          children.push(
            ...slot().map((node, nodeIndex) =>
              cloneVNode(node, {
                key: name + "-" + slotOccurrence + "-" + nodeIndex,
              }),
            ),
          );
        } else {
          children.push(placeholder);
        }

        cursor = index + placeholder.length;
      }

      if (cursor < message.length) {
        children.push(message.slice(cursor));
      }

      return h(props.tag, attrs, children);
    };
  },
});
</script>
