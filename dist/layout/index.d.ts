export { A as Alert, a as AlertAppearance, b as AlertProps, c as AlertStatus } from '../Alert-DkSFD4Ke.js';
export { A as AlertDialog, a as AlertDialogProps } from '../AlertDialog-BhMAi-uk.js';
import * as solid_js from 'solid-js';
import { JSX, ParentComponent } from 'solid-js';
export { D as Dialog, a as DialogOverlayAnimation, b as DialogPanelAnimation, c as DialogProps, d as DialogSize, e as Drawer, f as DrawerActionsPosition, g as DrawerOffset, h as DrawerProps, i as DrawerSide, j as DrawerSize, k as PopoverAlign, l as PopoverAnchor, m as PopoverArrow, o as PopoverContent, p as PopoverContentPrimitive, q as PopoverContentProps, r as PopoverPortal, s as PopoverRoot, t as PopoverRootProps, u as PopoverSide, v as PopoverTrigger, w as TooltipArrow, x as TooltipContent, y as TooltipContentPrimitive, z as TooltipContentProps, A as TooltipPortal, B as TooltipRoot, C as TooltipTrigger } from '../Popover-CtUzvaDp.js';
import { C as ComponentSize } from '../component-size-BIaRRIRi.js';
export { B as BlockQuote, a as BlockQuoteJustify, b as BlockQuoteProps } from '../BlockQuote-BKLW0_Mz.js';
export { T as TablePanel, a as TablePanelProps } from '../TablePanel-C7i99nvl.js';
import * as _kobalte_core_accordion from '@kobalte/core/accordion';
import { AccordionContentProps as AccordionContentProps$1, AccordionItemProps, AccordionTriggerProps } from '@kobalte/core/accordion';
import * as _kobalte_core_collapsible from '@kobalte/core/collapsible';
import { CollapsibleTriggerProps, CollapsibleContentProps as CollapsibleContentProps$1 } from '@kobalte/core/collapsible';
import '@kobalte/core/alert-dialog';
import '@kobalte/core/dropdown-menu';
import '@kobalte/core/tooltip';
import '@kobalte/core/popover';

type DividerStyle = 'solid' | 'dotted' | 'dashed';
type DividerWeight = 'thin' | 'medium' | 'thick';
interface DividerProps extends JSX.HTMLAttributes<HTMLDivElement> {
    /** Optional label shown in the center (e.g. "or continue with") */
    label?: string;
    /** Line style: solid (default), dotted, or dashed */
    lineStyle?: DividerStyle;
    /** Line thickness: thin (1px), medium (2px), or thick (4px). Default thin. */
    weight?: DividerWeight;
}
declare function Divider(props: DividerProps): JSX.Element;

interface WizardStepProps {
    /** Step number (1-based) for display */
    stepNumber?: number;
    /** Step title */
    title: string;
    /** Optional description below title */
    description?: string;
    /** Optional class for the wrapper */
    class?: string;
    children: JSX.Element;
}
/** Wraps one wizard step's content with optional step badge, title, and description. */
declare const WizardStep: ParentComponent<WizardStepProps>;

interface VerticalWizardProps {
    /** Current step (1-based) */
    step: number;
    /** Label for each step */
    stepLabels: string[];
    /** Visual style: default or compact. Default: default. */
    variant?: WizardStepperVariant;
    /** Width of the stepper sidebar. Default: md (w-48 / 192 px). */
    sidebarWidth?: 'sm' | 'md' | 'lg';
    /** Gap between sidebar and content. Default: md. */
    gap?: 'sm' | 'md' | 'lg' | 'xl';
    /** Optional class for the root wrapper */
    class?: string;
    /** Optional class override for the sidebar panel */
    sidebarClass?: string;
    /** Optional class override for the content panel */
    contentClass?: string;
    /** Active step content */
    children: JSX.Element;
}
/** Two-column wizard layout: vertical stepper on the left, step content on the right. */
declare function VerticalWizard(props: VerticalWizardProps): JSX.Element;

type WizardStepperVariant = 'default' | 'compact' | 'chevrons';
interface WizardStepperProps {
    /** Current step (1-based) */
    step: number;
    /** Total number of steps */
    totalSteps: number;
    /** Step labels (e.g. ['About you', 'Your company']) */
    stepLabels: string[];
    /** 'horizontal' | 'vertical' */
    orientation?: 'horizontal' | 'vertical';
    /** Visual style: default (circles + line), compact (smaller), or chevrons (chevron separators). Default: default. */
    variant?: WizardStepperVariant;
    /** Optional class for the root */
    class?: string;
}

/** Reusable stepper: numbered steps with labels and connector. */
declare function WizardStepper(props: WizardStepperProps): solid_js.JSX.Element;
declare const Wizard: {
    Stepper: typeof WizardStepper;
    Step: solid_js.ParentComponent<WizardStepProps>;
    Vertical: typeof VerticalWizard;
};

interface PromptWithActionProps {
    /** Leading text (e.g. "Don't have an account?") */
    prompt: string;
    /** Link or button label (e.g. "Sign up") */
    actionLabel: JSX.Element;
    /** Optional class for the wrapper */
    class?: string;
    /** Optional class for the action link/button (e.g. primary link styling) */
    actionClass?: string;
}
interface PromptWithActionLinkProps extends PromptWithActionProps {
    /** Render as link with href */
    href: string;
    onClick?: never;
}
interface PromptWithActionButtonProps extends PromptWithActionProps {
    /** Render as button with click handler */
    onClick: () => void;
    href?: never;
}
type PromptWithActionAllProps = PromptWithActionLinkProps | PromptWithActionButtonProps;
/** One line: prompt text plus a link or button action. */
declare function PromptWithAction(props: PromptWithActionAllProps): JSX.Element;

interface SectionProps extends Omit<JSX.HTMLAttributes<HTMLElement>, 'children'> {
    /** Section title (e.g. h2) */
    title?: string;
    /** Optional description below title */
    description?: string;
    /** Optional description as JSX */
    descriptionContent?: JSX.Element;
    /** Optional id for the section element (for anchor links / "On this page" TOC). */
    id?: string;
    /** Optional class for the section wrapper */
    class?: string;
    /** Optional class for the title */
    titleClass?: string;
    /** Optional class for the description paragraph */
    descriptionClass?: string;
    children: JSX.Element;
}
/** Section block with optional title and description. Use for repeated content blocks (e.g. admin pages). */
declare function Section(props: SectionProps): JSX.Element;

interface InlineProps extends Omit<JSX.HTMLAttributes<HTMLDivElement>, 'class'> {
    /** Optional class for the inline container */
    class?: string;
    children: JSX.Element;
}
declare function Inline(props: InlineProps): JSX.Element;

interface FormProps extends Omit<JSX.FormHTMLAttributes<HTMLFormElement>, 'class'> {
    /** Optional class for the form element */
    class?: string;
    /** Default size for supported field components inside this form. Individual fields can override with their own size prop. */
    size?: ComponentSize;
    /** Form content (fields, sections, actions) */
    children: JSX.Element;
    /** Optional form-level validation summary. When set, rendered at the top. Alert component provides alert semantics. Use for listing all field errors. */
    errorSummary?: string[] | JSX.Element;
}
/** Form wrapper with consistent spacing. Use with layout primitives and WizardActions for the button row. Supports errorSummary for validation summary. */
declare function Form(props: FormProps): JSX.Element;

interface PageHeadingProps {
    /** Main heading text */
    title: string;
    /** Optional description (plain string) */
    description?: string;
    /** Optional description as JSX (e.g. with links or emphasis). Takes precedence over description. */
    descriptionContent?: JSX.Element;
    /** Optional class for the description paragraph */
    descriptionClass?: string;
    /** Optional class for the wrapper */
    class?: string;
    /** Optional class for the heading element */
    titleClass?: string;
    /** Heading level: 1 or 2. Default 1. */
    level?: 1 | 2;
    /** Semantic heading element to render. Defaults to h1/h2 based on level. */
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}
/** Page title + optional description. Use for consistent page headers. */
declare function PageHeading(props: PageHeadingProps): JSX.Element;

type CardVariant = 'default' | 'flat';
interface CardProps extends Omit<JSX.HTMLAttributes<HTMLDivElement>, 'children'> {
    children: JSX.Element;
    /** Horizontal layout: image (or first block) on the left, content on the right. Use with Card.Image (horizontal) + Card.Content. */
    horizontal?: boolean;
    /** Visual style: default (border + bg + shadow), or flat (border + bg, no shadow). */
    variant?: CardVariant;
}
type CardComponent = ParentComponent<CardProps> & {
    Header: typeof CardHeader;
    Image: typeof CardImage;
    AvatarTitle: typeof CardAvatarTitle;
    Content: typeof CardContent;
    Body: typeof CardBody;
};
interface CardHeaderProps {
    title: string;
    /** Optional action (e.g. button) on the right. */
    action?: JSX.Element;
    /** Heading element to render. Default 'h3'. Use to maintain proper document outline in different contexts. */
    as?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    class?: string;
}
/** Card header: title and optional action. Renders a bordered bottom. */
declare function CardHeader(props: CardHeaderProps): JSX.Element;
interface CardImageProps {
    src: string;
    alt: string;
    /** Use for horizontal cards so the image has a fixed width and doesn't stretch. */
    horizontal?: boolean;
    class?: string;
    imgClass?: string;
}
/** Full-width image at top (or left when horizontal). Use horizontal=true inside a Card with horizontal. */
declare function CardImage(props: CardImageProps): JSX.Element;
interface CardAvatarTitleProps {
    /** Display name shown next to the avatar. */
    name: string;
    /** Optional image URL for the avatar. */
    imageUrl?: string | null;
    /** Avatar size. */
    avatarSize?: 'sm' | 'md';
    /** Show skeleton shimmer instead of avatar and name. */
    loading?: boolean;
    class?: string;
}
/** Row with Avatar and name. Use for "card with avatar and user name". Pass loading to show skeleton shimmer. */
declare function CardAvatarTitle(props: CardAvatarTitleProps): JSX.Element;
interface CardContentProps {
    children: JSX.Element;
    /** Use when card is horizontal so this block fills the remaining space. */
    class?: string;
}
/** Wrapper for the main content column. Use as the second child in horizontal cards (after Card.Image) so content fills remaining space. */
declare const CardContent: ParentComponent<CardContentProps>;
interface CardBodyProps {
    children: JSX.Element;
    class?: string;
}
/** Card body: padded content area. */
declare const CardBody: ParentComponent<CardBodyProps>;
declare const Card: CardComponent;

type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
type ContainerAlign = 'start' | 'center' | 'end';
interface ContainerProps {
    /** Max width of the container; default md. full = no max-width constraint. Ignored when fluid is true. */
    size?: ContainerSize;
    /** When true, container stretches to fill the width of its parent (no max-width, no centering). */
    fluid?: boolean;
    /** Horizontal alignment within parent when not fluid. Default center. */
    align?: ContainerAlign;
    /** Additional class for the wrapper. */
    class?: string;
    children?: JSX.Element;
}
/**
 * Centered layout container with max-width and horizontal padding.
 * No border or background by default—it only confines content (max-width, centering, padding).
 * Use for page content, forms, or reading width. Set fluid to stretch to full parent width.
 */
declare const Container: ParentComponent<ContainerProps>;

type GridCols = 1 | 2 | 3 | 4 | 5 | 6;
type GridGap = 'none' | 'sm' | 'md' | 'lg' | 'xl';
interface GridProps {
    /** Number of columns (1–6). Default 1. */
    cols?: GridCols;
    /** Gap between items. Default md. */
    gap?: GridGap;
    /** Additional class for the grid wrapper. */
    class?: string;
    children?: JSX.Element;
}
/**
 * CSS grid layout with configurable columns and gap.
 * Use for card grids, form layouts, or equal-width columns.
 */
declare const Grid: ParentComponent<GridProps>;

interface FormActionsProps {
    /** Label for the back/secondary button */
    backLabel: string;
    onBack: () => void;
    /** Label for the primary button */
    primaryLabel: string;
    loading?: boolean;
    disabled?: boolean;
    class?: string;
}
interface FormActionsSubmitProps extends FormActionsProps {
    /** Primary button type */
    primaryType?: 'submit';
}
interface FormActionsButtonProps extends FormActionsProps {
    /** Primary button type */
    primaryType: 'button';
    /** Handler for primary button click (required when type='button') */
    onPrimary: () => void;
}
type FormActionsAllProps = FormActionsSubmitProps | FormActionsButtonProps;
/** Back + primary button row for forms (e.g. wizard steps). */
declare function FormActions(props: FormActionsAllProps): JSX.Element;

interface CodeBlockLanguage {
    /** Unique id for the tab (e.g. "js", "ts"). */
    id: string;
    /** Tab label (e.g. "JavaScript", "TypeScript"). */
    label: string;
    /** Code content for this variant. */
    content: string;
    /** Language identifier passed to the highlighter. Defaults to id. */
    language?: string;
    /** Optional icon (e.g. SVG). Pass a function to show the icon in both the trigger and the list (e.g. `() => <Icon name="JS" />`); a static element can only appear in one place. */
    icon?: JSX.Element | (() => JSX.Element);
}
interface CodeBlockProps extends Omit<JSX.HTMLAttributes<HTMLDivElement>, 'children'> {
    /** Code content (single block). When used, language applies. */
    content?: string;
    /** Alternate content (e.g. component-only snippet). When set, a toggle in the header switches between content and alternateContent. */
    alternateContent?: string;
    /** Language identifier passed to the highlighter (e.g. "tsx", "bash"). No-op when no highlighter is provided. */
    language?: string;
    /** Multiple language variants with a tab switcher. When set, content/language are ignored for initial display. */
    languages?: CodeBlockLanguage[];
    /** Optional filename or title shown in the header (e.g. "Table.jsx"). */
    filename?: string;
    /** Optional label in the header (e.g. "Embed Code"). Shown with or instead of filename. */
    label?: string;
    /** Optional icon or image (e.g. SVG) shown to the left of the filename/label in the header. */
    headerIcon?: JSX.Element;
    /** Show line numbers. */
    showLineNumbers?: boolean;
    /** Line numbers to highlight (e.g. [2, 3, 5]). */
    highlightLines?: number[];
    /** When true, force dark appearance regardless of app theme. When undefined, follow app light/dark (e.g. .dark on root). */
    dark?: boolean;
    /** Use primary (brand) background. Overrides dark. */
    primary?: boolean;
    /** Minimum height (e.g. "min-h-[120px]"). Default none (min-h-0) so short snippets don't reserve extra space. */
    minHeight?: string;
    /** When true, code is in a collapsible section with a "Show code" / "Hide code" trigger. */
    collapsible?: boolean;
    /** When collapsible, whether the code is open by default. Default false. */
    defaultCodeOpen?: boolean;
    /**
     * Embedded mode for placing the CodeBlock inside another surface (e.g. Card).
     * Removes the outer border/radius and uses a flat trigger.
     */
    embedded?: boolean;
    /** Label for the trigger when code is hidden. Default "Show code". */
    collapsibleLabelShow?: string;
    /** Label for the trigger when code is visible. Default "Hide code". */
    collapsibleLabelHide?: string;
    /**
     * Optional syntax highlighter. Called with `(code, language)`, must return highlighted HTML or a Promise.
     * When omitted, code is rendered as plain text.
     * Example (Prism): `(code, lang) => highlightCode(code, lang)` where highlightCode loads grammars on demand.
     */
    highlighter?: (code: string, language: string) => string | Promise<string>;
    class?: string;
    preProps?: JSX.HTMLAttributes<HTMLPreElement>;
}
declare function CodeBlock(props: CodeBlockProps): JSX.Element;

declare const AccordionRoot: typeof _kobalte_core_accordion.Root & {
    Content: typeof _kobalte_core_accordion.Content;
    Header: typeof _kobalte_core_accordion.Header;
    Item: typeof _kobalte_core_accordion.Item;
    Trigger: typeof _kobalte_core_accordion.Trigger;
};
declare const AccordionItem: typeof _kobalte_core_accordion.Item;
declare const AccordionHeader: typeof _kobalte_core_accordion.Header;
declare const AccordionTrigger: typeof _kobalte_core_accordion.Trigger;
declare const AccordionContent: typeof _kobalte_core_accordion.Content;
interface AccordionContentProps extends AccordionContentProps$1 {
    class?: string;
    children?: JSX.Element;
}
declare function AccordionContentStyled(props: AccordionContentProps): JSX.Element;
interface AccordionTriggerStyledProps extends AccordionTriggerProps {
    class?: string;
    children?: JSX.Element;
}
declare function AccordionTriggerStyled(props: AccordionTriggerStyledProps): JSX.Element;
interface AccordionItemStyledProps extends AccordionItemProps {
    class?: string;
    children?: JSX.Element;
}
declare function AccordionItemStyled(props: AccordionItemStyledProps): JSX.Element;

declare const CollapsibleRoot: typeof _kobalte_core_collapsible.Root & {
    Content: typeof _kobalte_core_collapsible.Content;
    Trigger: typeof _kobalte_core_collapsible.Trigger;
};
declare const CollapsibleTrigger: typeof _kobalte_core_collapsible.Trigger;
declare const CollapsibleContent: typeof _kobalte_core_collapsible.Content;
type CollapsibleStyledVariant = 'default' | 'minimal';
interface CollapsibleContentProps extends CollapsibleContentProps$1 {
    variant?: CollapsibleStyledVariant;
    class?: string;
    children?: JSX.Element;
}
declare function CollapsibleContentStyled(props: CollapsibleContentProps): JSX.Element;
interface CollapsibleTriggerStyledProps extends CollapsibleTriggerProps {
    variant?: CollapsibleStyledVariant;
    class?: string;
    children?: JSX.Element;
}
declare function CollapsibleTriggerStyled(props: CollapsibleTriggerStyledProps): JSX.Element;
type CollapsibleComponent = typeof CollapsibleRoot & {
    Trigger: typeof CollapsibleTriggerStyled;
    Content: typeof CollapsibleContentStyled;
};
declare const Collapsible: CollapsibleComponent;

export { AccordionContent, type AccordionContentProps, AccordionContentStyled, AccordionHeader, AccordionItem, AccordionItemStyled, type AccordionItemStyledProps, AccordionRoot, AccordionTrigger, AccordionTriggerStyled, type AccordionTriggerStyledProps, Card, type CardAvatarTitleProps, type CardBodyProps, type CardComponent, type CardContentProps, type CardHeaderProps, type CardImageProps, type CardProps, type CardVariant, CodeBlock, type CodeBlockLanguage, type CodeBlockProps, Collapsible, CollapsibleContent, type CollapsibleContentProps, CollapsibleContentStyled, CollapsibleRoot, CollapsibleTrigger, CollapsibleTriggerStyled, type CollapsibleTriggerStyledProps, Container, type ContainerAlign, type ContainerProps, type ContainerSize, Divider, type DividerProps, type DividerStyle, type DividerWeight, Form, FormActions, type FormActionsAllProps, type FormProps, Grid, type GridCols, type GridGap, type GridProps, Inline, type InlineProps, PageHeading, type PageHeadingProps, PromptWithAction, type PromptWithActionAllProps, Section, type SectionProps, VerticalWizard, type VerticalWizardProps, Wizard, WizardStep, type WizardStepProps, WizardStepper, type WizardStepperProps, type WizardStepperVariant };
