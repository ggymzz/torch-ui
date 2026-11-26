import {
  Copy
} from "./5X6JRKCS.jsx";
import {
  cn
} from "./N5KQYWCA.jsx";

// src/components/typography/Code.tsx
import { Show, splitProps } from "solid-js";
function Code(props) {
  const inlineClass = "inline-flex items-baseline rounded bg-surface-overlay px-2 leading-none text-[0.9em] font-mono text-ink-800 mx-0.5";
  const blockClass = "flex items-center gap-2 rounded-lg border border-surface-border bg-surface-base px-3 py-2 text-sm font-mono text-ink-800";
  if (props.block) {
    const [local2, divProps] = splitProps(props, [
      "children",
      "block",
      "copyable",
      "text",
      "class"
    ]);
    const copyText = () => (local2.text ?? "").trim();
    const displayText = () => local2.children ?? copyText();
    return <div
      class={cn("w-full relative", blockClass, local2.copyable && "pr-12", local2.class)}
      {...divProps}
    >
				<code class="flex-1 min-w-0 truncate block">{displayText()}</code>

				<Show when={local2.copyable && copyText()}>
					<div class="absolute right-2 top-1/2 -translate-y-1/2 shrink-0">
						<Copy text={copyText()} display="icon-only" variant="ghost" size="xs" />
					</div>
				</Show>
			</div>;
  }
  const [local, codeProps] = splitProps(props, [
    "children",
    "block",
    "copyable",
    "text",
    "class"
  ]);
  return <code class={cn(inlineClass, local.class)} {...codeProps}>
			{local.children}
		</code>;
}

// src/components/typography/Icon.tsx
import { splitProps as splitProps2 } from "solid-js";
function Icon(props) {
  const [local, others] = splitProps2(props, ["src", "size", "class"]);
  const size = () => local.size ?? 16;
  return <img
    alt=""
    aria-hidden="true"
    src={local.src}
    width={size()}
    height={size()}
    class={cn("inline-block shrink-0", local.class)}
    {...others}
  />;
}

export {
  Code,
  Icon
};
