export { Code, Icon } from '../chunk/LT3UN4QR.js';
import '../chunk/WVMITX4D.js';
export { AvatarGroup, Badge, Board, Carousel, ColorSwatch, DataTable, EmptyState, Image, KEY, Kbd, KbdShortcut, Persona, StatCard, TABLE_CONTAINER_CLASS, Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow, Tag, Timeline, TreeView, Video } from '../chunk/DTUMM6DG.js';
export { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuRoot, ContextMenuSeparator, ContextMenuTrigger, HoverCard, HoverCardArrow, HoverCardBody, HoverCardContent, HoverCardFooter, HoverCardHeader, HoverCardPortal, HoverCardRoot, HoverCardSeparator, HoverCardTrigger, SearchPalette } from '../chunk/I7AS4Z3W.js';
export { Chart, Sparkline } from '../chunk/MWDYBVUJ.js';
export { Banner, Loading, PasswordStrengthIndicator, SkeletonCard, SkeletonForm, SkeletonHeading, SkeletonNavBlock, SkeletonSection, SkeletonTable, ToastProvider, isPasswordWeak, useToast, validatePassword } from '../chunk/3SAUQFAM.js';
export { Breadcrumbs, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger, KobalteTabs, MegaMenu, MegaMenuBar, MegaMenuBarLink, MegaMenuColumn, MegaMenuContent, MegaMenuDivider, MegaMenuFeatured, MegaMenuFooter, MegaMenuFooterLink, MegaMenuItem, MegaMenuMenu, MegaMenuPanel, MegaMenuSection, MegaMenuTrigger, MenuBar, MenuBarContent, MenuBarDivider, MenuBarItem, MenuBarLabel, MenuBarLink, MenuBarMenu, MenuBarNavLink, MenuBarTrigger, Pagination, Sidebar, Tabs, TabsContent, TabsList, TabsTrigger, ViewSwitcher } from '../chunk/QTWQOBDV.js';
export { AccordionContent, AccordionContentStyled, AccordionHeader, AccordionItem, AccordionItemStyled, AccordionRoot, AccordionTrigger, AccordionTriggerStyled, Alert, AlertDialog, Autocomplete, Avatar, BlockQuote, Button, ButtonGroup, Card, Checkbox, CodeBlock, CodeInput, Collapsible, CollapsibleContent, CollapsibleContentStyled, CollapsibleRoot, CollapsibleTrigger, CollapsibleTriggerStyled, ColorPicker, ComponentSizeProvider, Container, Copy, DarkModeToggle, DatePicker, DateRangePicker, Dialog, Divider, Drawer, FieldPicker, FileUpload, Form, FormActions, ComponentSizeProvider as FormSizeProvider, Grid, IconsProvider, Inline, Input, Link, LocaleProvider, MultiSelect, NumberField, PageHeading, Popover, PopoverAnchor, PopoverArrow, PopoverCloseButton, PopoverContent, PopoverContentPrimitive, PopoverPortal, PopoverRoot, PopoverTrigger, Progress, PromptWithAction, RadioGroup, RelativeDateDefaultInput, ReorderableList, Section, Select, Skeleton, Slider, Switch, TablePanel, TextArea, TimePicker, Tooltip, TooltipArrow, TooltipContent, TooltipContentPrimitive, TooltipPortal, TooltipRoot, TooltipTrigger, VerticalWizard, Wizard, WizardStep, WizardStepper, createSortableDrag, defaultIcons, inputSizeConfig, mergeRefs, resolveLocale, useComponentSize, useCopyToClipboard, useComponentSize as useFormSize, useIcons, useLocaleConfig } from '../chunk/MW55VJ7L.js';
export { cn } from '../chunk/CZPH5U6S.js';
import { createComponent } from 'solid-js/web';
import { I18nProvider, useLocale } from '@kobalte/core/i18n';

function AppI18nProvider(props) {
  return createComponent(I18nProvider, {
    get locale() {
      return props.locale;
    },
    get children() {
      return props.children;
    }
  });
}
function useAppLocale() {
  const {
    locale,
    direction
  } = useLocale();
  return {
    locale,
    direction
  };
}

export { AppI18nProvider, useAppLocale };
