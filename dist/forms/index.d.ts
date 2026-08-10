export { I as Input, a as InputProps } from '../Input-Dzvde_F6.js';
import * as solid_js from 'solid-js';
import { JSX } from 'solid-js';
import { C as ComponentSize } from '../component-size-BIaRRIRi.js';

type TextAreaResize = 'none' | 'vertical' | 'horizontal' | 'both';
interface TextAreaProps extends JSX.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: JSX.Element;
    helperText?: JSX.Element;
    /** When true, never render label row or error/helper text (textarea only) */
    bare?: boolean;
    required?: boolean;
    optional?: boolean;
    resize?: TextAreaResize;
    maxLength?: number;
    autoresize?: boolean;
    inputClass?: string;
    onValueChange?: (value: string) => void;
    onErrorClear?: () => void;
}
declare function TextArea(props: TextAreaProps): JSX.Element;

interface SelectOption {
    value: string;
    label: string;
    /** Optional icon shown before the label. */
    icon?: JSX.Element;
    /** Optional hex or CSS color for a status dot (e.g. #22c55e). When set, a small colored dot is shown before the label; useful for status/state fields. */
    color?: string | null;
}
/** A labelled group of options rendered as a non-selectable section header in the dropdown. */
interface SelectOptionGroup {
    /** The section heading text. */
    group: string;
    /** Options belonging to this group. */
    options: SelectOption[];
}
interface SelectProps extends Omit<JSX.HTMLAttributes<HTMLDivElement>, 'children'> {
    label?: string;
    error?: JSX.Element;
    helperText?: JSX.Element;
    /** When true, never render label row or error/helper text (control only). */
    bare?: boolean;
    required?: boolean;
    /** When true, show "optional" on the label row when not required. Default false. */
    optional?: boolean;
    placeholder?: string;
    value?: string;
    onValueChange?: (value: string) => void;
    onErrorClear?: () => void;
    disabled?: boolean;
    /** Applied to the root wrapper (label + control + helper/error). Use for layout (e.g. max-w-sm). */
    class?: string;
    /** Applied to the trigger element for height/sizing (e.g. min-h-[50px] h-[50px]). */
    triggerClass?: string;
    /** Input size. Controls height, text size, and padding. Default: md (36px). */
    size?: ComponentSize;
    /** Flat list of options. Provide either `options` or `groups`, not both. */
    options?: SelectOption[];
    /** Grouped options rendered with non-selectable section headers. Provide either `options` or `groups`, not both. */
    groups?: SelectOptionGroup[];
    /** When true, show a search input in the dropdown to filter options by label. Default false. */
    searchable?: boolean;
    /** When true and a value is selected, show a clear (×) button that resets the value to the placeholder. Default false. */
    clearable?: boolean;
    /**
     * Whether the select should trap focus and lock outside interactions while open.
     * Default false. Set to true when used inside a modal Dialog so that the Dialog's
     * focus trap is paused (via focusScopeStack) while the select is open — this
     * prevents the Dialog from stealing focus from the search input on every keystroke.
     * Side effect: outside pointer events are disabled while open (acceptable since
     * users only interact with the select while it's open).
     */
    modal?: boolean;
    /** Ref forwarded to the root wrapper div. */
    ref?: (el: HTMLDivElement) => void;
    /** Id for the root wrapper (e.g. for aria-labelledby / label for). */
    id?: string;
}
declare const Select: (props: SelectProps) => JSX.Element;

/**

 * Autocomplete: text input with a dropdown of suggested options (combobox).

 * Built on Kobalte Combobox. For "free solo" or creatable, use custom options or a creatable pattern in the app layer.

 */

interface AutocompleteOption {
    value: string;
    label: string;
    /** When true, option is not selectable. */
    disabled?: boolean;
}
interface AutocompleteProps {
    label?: string;
    /** Error message and invalid styling. */
    error?: JSX.Element;
    /** Hint text below the control. */
    helperText?: JSX.Element;
    /** When true, never render label row or error/helper text (control only). */
    bare?: boolean;
    /** When true, show required indicator on label. */
    required?: boolean;
    /** When true, show "optional" on the label row when not required. Default false. */
    optional?: boolean;
    options: AutocompleteOption[];
    placeholder?: string;
    value?: string;
    onValueChange?: (value: string) => void;
    /** Called when the user interacts with the control while an error is shown, allowing the parent to clear the error. */
    onErrorClear?: () => void;
    class?: string;
    /** Disable the control and input. */
    disabled?: boolean;
    /** When true, hide the clear (X) button. */
    disableClearable?: boolean;
    /** Input size. Controls height, text size, and padding. Default: md (36px). */
    size?: ComponentSize;
    /** Disable specific options. Overrides option.disabled when provided. */
    getOptionDisabled?: (option: AutocompleteOption) => boolean;
    /** Custom filter. Receives full options and current input value; return filtered options. Use (x) => x for async (you manage options). */
    filterOptions?: (options: AutocompleteOption[], inputValue: string) => AutocompleteOption[];
    /** Controlled input value (typed text). When provided with onInputChange, enables controlled input for async/search-as-you-type. */
    inputValue?: string;
    /** Called when the user types. Use with filterOptions or for controlled input. */
    onInputChange?: (value: string) => void;
    /** Custom render for each option. Receives the option; return JSX (e.g. label + description). */
    renderOption?: (option: AutocompleteOption) => JSX.Element;
    /**
     * Kobalte Combobox triggerMode. Default "input" (listbox opens only when typing).
     * Use "focus" to open the listbox on input focus (e.g. EntityPicker click-to-show).
     */
    triggerMode?: 'input' | 'focus' | 'manual';
    /** Ref forwarded to the root wrapper div. */
    ref?: (el: HTMLDivElement) => void;
    /** ID forwarded to the underlying combobox input (e.g. for label[for] association). */
    id?: string;
    /** Accessible label for the input (when no visible label is rendered). Forwarded to the underlying combobox input. */
    'aria-label'?: string;
    /** ID of an element that labels this control. Forwarded to the underlying combobox input. */
    'aria-labelledby'?: string;
}
declare function Autocomplete(props: AutocompleteProps): JSX.Element;

interface MultiSelectOption {
    value: string;
    label: string;
    icon?: JSX.Element;
}
interface MultiSelectProps {
    label?: string;
    helperText?: JSX.Element;
    error?: JSX.Element;
    bare?: boolean;
    required?: boolean;
    optional?: boolean;
    options: MultiSelectOption[];
    value: string[];
    onValueChange: (value: string[]) => void;
    onErrorClear?: () => void;
    placeholder?: string;
    class?: string;
    reorderable?: boolean;
    searchable?: boolean;
    disabled?: boolean;
    size?: ComponentSize;
    ref?: (el: HTMLDivElement) => void;
}
declare function MultiSelect(props: MultiSelectProps): JSX.Element;

type CheckboxSize = 'sm' | 'md';
interface CheckboxProps extends Omit<JSX.HTMLAttributes<HTMLInputElement>, 'onChange' | 'onValueChange'> {
    /** Label text (or use children). */
    label?: string;
    /** Error message shown below the checkbox. */
    error?: JSX.Element;
    /** Hint text below the checkbox. */
    helperText?: JSX.Element;
    /** When true, never render label row or error/helper text (checkbox only). */
    bare?: boolean;
    /** When true, show as required (e.g. asterisk). */
    required?: boolean;
    /** When true, show "optional" on the label row when not required. Default false. */
    optional?: boolean;
    /** Controlled checked state. */
    checked?: boolean;
    /** Controlled change handler. Receives the new checked boolean. */
    onValueChange?: (checked: boolean) => void;
    /** Called when the user interacts with the control while an error is shown, allowing the parent to clear the error. */
    onErrorClear?: () => void;
    /** Visual size. */
    size?: CheckboxSize;
    /** Indeterminate state (e.g. parent when some children selected). */
    indeterminate?: boolean;
    /** Disable the checkbox. */
    disabled?: boolean;
    class?: string;
    id?: string;
    /** Form field name. */
    name?: string;
    /** Form field value. */
    value?: string;
    children?: JSX.Element;
}
declare function Checkbox(props: CheckboxProps): JSX.Element;

interface SwitchProps extends Omit<JSX.HTMLAttributes<HTMLDivElement>, 'children' | 'onChange' | 'onValueChange'> {
    /** Label text. */
    label?: string;
    /** Visual style variant. */
    variant?: 'default' | 'icon';
    /** Icon to render inside the thumb when unchecked (icon variant). */
    thumbOffIcon?: JSX.Element;
    /** Icon to render inside the thumb when checked (icon variant). */
    thumbOnIcon?: JSX.Element;
    /** Track color when unchecked. Accepts any CSS color string (e.g. 'rebeccapurple', '#fff', 'var(--color-surface-dim)'). */
    trackColor?: string;
    /** Track color when checked. Accepts any CSS color string (e.g. 'var(--color-primary-500)'). */
    trackCheckedColor?: string;
    /** Hint text below the control. */
    helperText?: JSX.Element;
    /** Error message and invalid styling. */
    error?: JSX.Element;
    /** When true, never render label row or error/helper text (control only). */
    bare?: boolean;
    /** When true, show required indicator on label. */
    required?: boolean;
    /** When true, show "optional" on the label row when not required. Default false. */
    optional?: boolean;
    /** Controlled checked state. */
    checked?: boolean;
    /** Default checked (uncontrolled). */
    defaultChecked?: boolean;
    /** Called when checked state changes. */
    onValueChange?: (checked: boolean) => void;
    /** Called when the user interacts with the control while an error is shown, allowing the parent to clear the error. */
    onErrorClear?: () => void;
    /** Disables the switch. */
    disabled?: boolean;
    /** For form submission when checked (e.g. "on"). */
    value?: string;
    /** Form name. */
    name?: string;
    /** Component size. Default 'md'. */
    size?: ComponentSize;
    /** When true, the root wrapper uses full width. Default true. */
    fullWidth?: boolean;
    /** Additional class for the root wrapper. */
    class?: string;
    /** Additional class for the control (track). */
    controlClass?: string;
    /** Ref forwarded to the root wrapper div. */
    ref?: (el: HTMLDivElement) => void;
}
declare function Switch(props: SwitchProps): JSX.Element;

interface RadioGroupOption {
    value: string;
    label: string;
    /** Optional description for the option. */
    description?: string;
}
interface RadioGroupProps {
    /** Group label (e.g. "Choose one"). */
    label?: string;
    /** Hint text below the control. */
    helperText?: JSX.Element;
    /** Error message and invalid styling. */
    error?: JSX.Element;
    /** When true, never render label row or error/helper text (control only). */
    bare?: boolean;
    /** When true, show required indicator on label. */
    required?: boolean;
    /** When true, show "optional" on the label row when not required. Default false. */
    optional?: boolean;
    /** Options to display (value + label, optional description). */
    options: RadioGroupOption[];
    /** Selected value (controlled). */
    value?: string;
    /** Called when selection changes. */
    onValueChange?: (value: string) => void;
    /** Called when the user interacts with the control while an error is shown, allowing the parent to clear the error. */
    onErrorClear?: () => void;
    /** Disables all options. */
    disabled?: boolean;
    /** Form name. */
    name?: string;
    /** Layout: vertical list (default) or horizontal. */
    orientation?: 'vertical' | 'horizontal';
    /** Component size. Default 'md'. */
    size?: ComponentSize;
    /** Removes item padding and tightens gap — for dense UIs like filter/sort drawers. */
    compact?: boolean;
    /** Additional class for the root. */
    class?: string;
}
declare function RadioGroup(props: RadioGroupProps): JSX.Element;

interface NumberFieldProps {
    /** Label above the input. */
    label?: string;
    /** Error message and invalid styling. */
    error?: JSX.Element;
    /** Hint text below the input. */
    helperText?: JSX.Element;
    /** When true, never render label row or error/helper text (control only). */
    bare?: boolean;
    /** When true, show required indicator on label. */
    required?: boolean;
    /** When true, show "optional" on the label row when not required. Default false. */
    optional?: boolean;
    /** Controlled value (number). */
    value?: number;
    /** Called when value changes. */
    onValueChange?: (value: number | undefined) => void;
    /** Called when the user interacts with the control while an error is shown, allowing the parent to clear the error. */
    onErrorClear?: () => void;
    /** Minimum value. */
    minValue?: number;
    /** Maximum value. */
    maxValue?: number;
    /** Step for increment/decrement. */
    step?: number;
    /** Disables the input and steppers. */
    disabled?: boolean;
    /** Placeholder when empty. */
    placeholder?: string;
    /** Input size. Controls height, text size, and padding. Default: md (36px). */
    size?: ComponentSize;
    /** When true, show increment/decrement buttons. */
    showStepper?: boolean;
    /** Stepper layout when showStepper is true. Default: "compact". */
    stepperVariant?: 'compact' | 'inlineLabel';
    /** Additional class for the root. */
    class?: string;
    /** Ref forwarded to the number input element. */
    ref?: (el: HTMLInputElement) => void;
}
declare function NumberField(props: NumberFieldProps): JSX.Element;

interface CodeInputProps extends Omit<JSX.InputHTMLAttributes<HTMLInputElement>, 'type' | 'maxLength'> {
    /** 'single' = one input; 'digits' = one input per digit with paste/keyboard nav (e.g. verification code) */
    variant?: 'single' | 'digits';
    label?: string;
    error?: JSX.Element;
    helperText?: JSX.Element;
    /** When true, never render label row or error/helper text (control only). */
    bare?: boolean;
    /** When true, show required indicator on label. */
    required?: boolean;
    /** When true, show "optional" on the label row when not required. Default false. */
    optional?: boolean;
    /** Length of code (default 6) */
    length?: number;
    value?: string;
    onValueChange?: (value: string) => void;
    onErrorClear?: () => void;
    /** Component size. Default 'md'. */
    size?: ComponentSize;
}
declare function CodeInput(props: CodeInputProps): JSX.Element;

type SliderSize = 'sm' | 'md' | 'lg';
interface SliderProps {
    /** Label for the slider. */
    label?: string;
    /** Hint text below the control. */
    helperText?: JSX.Element;
    /** Error message and invalid styling. */
    error?: JSX.Element;
    /** When true, never render label row or error/helper text (control only). */
    bare?: boolean;
    /** When true, show required indicator on label. */
    required?: boolean;
    /** When true, show "optional" on the label row when not required. Default false. */
    optional?: boolean;
    /** Controlled value(s). Single thumb: [number], range: [min, max]. */
    value?: number[];
    /** Default value(s) when uncontrolled. */
    defaultValue?: number[];
    /** Called when value changes. */
    onValueChange?: (value: number[]) => void;
    /** Called when user finishes dragging. */
    onValueChangeEnd?: (value: number[]) => void;
    /** Called when the user interacts with the control while an error is shown, allowing the parent to clear the error. */
    onErrorClear?: () => void;
    /** Minimum value. Default 0. */
    minValue?: number;
    /** Maximum value. Default 100. */
    maxValue?: number;
    /** Step. Default 1. */
    step?: number;
    /** Minimum steps between thumbs (for range). */
    minStepsBetweenThumbs?: number;
    /** Custom accessible value label. */
    getValueLabel?: (params: {
        values: number[];
    }) => string;
    /** Orientation. */
    orientation?: 'horizontal' | 'vertical';
    /** Content before the track (e.g. icon or min label). */
    startContent?: JSX.Element;
    /** Content after the track (e.g. icon or max label). */
    endContent?: JSX.Element;
    /** Track thickness (height for horizontal, width for vertical). Default sm. Length is controlled by container. */
    size?: SliderSize;
    /** Track and thumb color. Default primary (theme). */
    color?: 'primary' | 'indigo' | 'rose';
    /** Optional marks (e.g. [0, 25, 50, 75, 100]) shown below the track, aligned with step positions. */
    marks?: number[];
    /** Disabled. */
    disabled?: boolean;
    /** Name for form submission. */
    name?: string;
    /** Root class. */
    class?: string;
}
declare function Slider(props: SliderProps): JSX.Element;

/** Single file entry with status and optional progress/error. Parent manages upload and updates these. */
interface FileUploadItem {
    id: string;
    file: File;
    status: 'pending' | 'uploading' | 'done' | 'error';
    progress?: number;
    error?: string;
}
type FileUploadVariant = 'button' | 'dropzone';
interface FileUploadProps {
    /** Controlled list of files. Parent adds/removes and updates status/progress. */
    files: FileUploadItem[];
    /** Called when user selects or drops files. Parent should append with id and status (e.g. 'pending' or 'uploading'). */
    onAddFiles: (files: File[]) => void;
    /** Called when user removes a file. */
    onRemove: (id: string) => void;
    /** Called when user retries a failed file. */
    onRetry?: (id: string) => void;
    /** Label above the control. */
    label?: string;
    /** Helper text and/or limits (e.g. "PNG, JPG. Max 10 MB"). Shown below label or in dropzone. */
    description?: string;
    /** Accept attribute (e.g. "image/png,image/jpeg"). */
    accept?: string;
    /** When false, single file only (input multiple=false, maxFiles 1). Default true. */
    multiple?: boolean;
    /** Max number of files. When multiple is false, defaults to 1. */
    maxFiles?: number;
    /** Max file size in bytes. Validated before onAddFiles. */
    maxFileSize?: number;
    /** 'button' = trigger only; 'dropzone' = large dashed area with drag & drop. */
    variant?: FileUploadVariant;
    /** Form-level error (e.g. "No files attached"). */
    error?: JSX.Element;
    /** Called when user interacts while a form-level error is shown, allowing the parent to clear it. */
    onErrorClear?: () => void;
    /** Disabled state. */
    disabled?: boolean;
    /** Optional id for the hidden input. */
    id?: string;
    /** Ref forwarded to the hidden file input. */
    ref?: (el: HTMLInputElement) => void;
    /** Root class. */
    class?: string;
    /** When true (dropzone only), show "Drag and drop..." + a prominent Browse button inside the zone. Default false = single clickable area. */
    browseButton?: boolean;
    /** Footer actions (e.g. Done left, Upload right). Dropzone: footer bar; button variant: same row after the trigger. */
    actions?: JSX.Element;
    /** Optional icon per file in the list. Receives the File; return a JSX element. When not set, a default icon is chosen by type (PDF→FileText, image→FileImage, video→FilePlay, spreadsheet/csv→FileSpreadsheet, archive→FolderArchive, code/txt→FileCode, else File). */
    fileIcon?: (file: File) => JSX.Element;
    /** When true (button variant only), show the selected file(s) to the right of the button in the same row instead of below. */
    fileInline?: boolean;
    /** Override any subset of the built-in UI strings for localisation. */
    labels?: FileUploadLabels;
}
interface FileUploadLabels {
    /** Clickable area prompt in the simple dropzone. Default: "Choose a file or drag & drop here" */
    dropzonePrompt?: string;
    /** Title inside the browse-button dropzone. Default: "Drag and drop your files here" */
    dropzoneDragTitle?: string;
    /** Subtitle inside the browse-button dropzone. Default: "or click Browse below" */
    dropzoneDragSubtitle?: string;
    /** Text on the Browse button inside the dropzone. Default: "Browse" */
    dropzoneBrowseButton?: string;
    /** Text on the Browse Files trigger button. Default: "Browse Files" */
    browseFilesButton?: string;
    /** aria-label for the file input (single file). Default: "Choose file" */
    ariaChooseFile?: string;
    /** aria-label for the file input (multiple files). Default: "Choose files" */
    ariaChooseFiles?: string;
    /** aria-label for the file input in button variant. Default: "Browse files" */
    ariaBrowseFiles?: string;
    /** aria-label for the upload region when no label prop is set. Default: "File upload" */
    ariaFileUpload?: string;
    /** aria-label for the view files button. Default: "View files" */
    ariaViewFiles?: string;
    /** aria-label for the uploaded files list. Default: "Uploaded files" */
    ariaUploadedFiles?: string;
    /** aria-label for the retry button. Receives the file name. */
    ariaRetry?: (fileName: string) => string;
    /** aria-label for the remove button. Receives the file name. */
    ariaRemove?: (fileName: string) => string;
    /** aria-label for the upload progress bar. Receives the file name. */
    ariaProgress?: (fileName: string) => string;
    /** Status label shown next to done files. Default: "Uploaded" */
    statusDone?: string;
    /** Status label shown next to pending files. Default: "Pending" */
    statusPending?: string;
    /** Status label shown next to failed files when no error message. Default: "Failed" */
    statusFailed?: string;
    /** Status label shown while uploading with no progress value. Default: "…" */
    statusUploading?: string;
    /** Summary text while uploading. Receives the number of active uploads. */
    summaryUploading?: (count: number) => string;
    /** Summary text when all files are done. Receives the number of uploaded files. */
    summaryDone?: (count: number) => string;
    /** Summary text when some files failed. Receives uploaded and failed counts. */
    summaryFailed?: (uploaded: number, failed: number) => string;
    /** Limits text for max file size. Receives the formatted size string. */
    limitsMaxSize?: (size: string) => string;
    /** Limits text for a single-file constraint. Default: "1 file" */
    limitsOneFile?: string;
    /** Limits text for a multi-file constraint. Receives the max count. */
    limitsMaxFiles?: (count: number) => string;
    /** Validation error when the one-file limit is already reached. Default: "Maximum 1 file allowed." */
    errorMaxOneFile?: string;
    /** Validation error when the N-file limit is already reached. Receives the limit. */
    errorMaxFiles?: (count: number) => string;
    /** Validation error when some files were skipped over the limit. Receives skipped count and limit label. */
    errorOverLimit?: (skipped: number, limitLabel: string) => string;
    /** Validation error when a file exceeds the max size. Receives file name and formatted max size. */
    errorTooLarge?: (fileName: string, maxSize: string) => string;
    /** Validation error when a file's type is not accepted. Receives the file name. */
    errorBadType?: (fileName: string) => string;
}
declare function FileUpload(props: FileUploadProps): JSX.Element;

/** A preset option shown in the DatePicker sidebar. */
interface DatePickerPreset {
    label: string;
    value: string;
}
/** Value is ISO date string YYYY-MM-DD, or YYYY-MM-DDTHH:MM when showTime is true. */
interface DatePickerProps {
    value?: string;
    onValueChange?: (value: string) => void;
    /** Called when the user interacts with the control while an error is shown, allowing the parent to clear the error. */
    onErrorClear?: () => void;
    placeholder?: string;
    disabled?: boolean;
    /** Min date YYYY-MM-DD */
    min?: string;
    /** Max date YYYY-MM-DD */
    max?: string;
    label?: string;
    error?: JSX.Element;
    helperText?: JSX.Element;
    bare?: boolean;
    required?: boolean;
    /** When true, show "optional" on the label row when not required. Default false. */
    optional?: boolean;
    /** Component size. Default 'md'. */
    size?: ComponentSize;
    class?: string;
    id?: string;
    /** Quick-select presets shown in a sidebar. Each has label and value (YYYY-MM-DD). */
    presets?: DatePickerPreset[];
    /** When true, adds HH:MM time selectors in the footer. Value format becomes YYYY-MM-DDTHH:MM. */
    showTime?: boolean;
    /** Clock format for time picker. Default '12h'. */
    timeFormat?: '12h' | '24h';
}
declare function DatePicker(props: DatePickerProps): JSX.Element;

interface DateRangePickerProps {
    /** ISO date string YYYY-MM-DD for range start */
    start?: string;
    /** ISO date string YYYY-MM-DD for range end */
    end?: string;
    /** Called when range changes. end may be empty string if only start is selected. */
    onValueChange?: (start: string, end: string) => void;
    /** Called when the user interacts with the control while an error is shown, allowing the parent to clear the error. */
    onErrorClear?: () => void;
    placeholder?: string;
    disabled?: boolean;
    /** Min date YYYY-MM-DD */
    min?: string;
    /** Max date YYYY-MM-DD */
    max?: string;
    label?: string;
    error?: JSX.Element;
    helperText?: JSX.Element;
    bare?: boolean;
    required?: boolean;
    optional?: boolean;
    /** Show two months side by side. Default: true */
    dualMonth?: boolean;
    /** Allow clearing the range. Default: true */
    clearable?: boolean;
    /** Component size. Default 'md'. */
    size?: ComponentSize;
    /** When true, include HH:MM time pickers for start and end. Value format becomes YYYY-MM-DDTHH:MM. */
    showTime?: boolean;
    /** Time display format when showTime is true. Default: '12h'. */
    timeFormat?: '12h' | '24h';
    /** Minute increment for the time picker. Default: 1 (every minute). */
    minuteStep?: number;
    class?: string;
    id?: string;
}
declare function DateRangePicker(props: DateRangePickerProps): JSX.Element;

/** Value is "HH:MM" in 24-hour format, or empty string. */
interface TimePickerProps {
    value?: string;
    onValueChange?: (value: string) => void;
    /** Called when the user interacts with the control while an error is shown. */
    onErrorClear?: () => void;
    placeholder?: string;
    disabled?: boolean;
    /** Time display format. Default: '12h'. */
    timeFormat?: '12h' | '24h';
    /** Minute increment. Default: 1 (every minute). */
    minuteStep?: number;
    label?: string;
    error?: JSX.Element;
    helperText?: JSX.Element;
    /** When true, renders without label/error chrome. */
    bare?: boolean;
    required?: boolean;
    /** Show "optional" badge when not required. */
    optional?: boolean;
    size?: ComponentSize;
    class?: string;
    id?: string;
}
declare function TimePicker(props: TimePickerProps): JSX.Element;

type ColorFormat = 'hex' | 'rgb' | 'hsl' | 'hsb';
interface ColorPickerProps {
    /** Current value as hex (e.g. #3b82f6). */
    value?: string;
    onValueChange?: (hex: string) => void;
    /** Preset hex colors shown as swatches. Defaults to a built-in set. */
    presets?: string[];
    /** Optional label above the control. */
    label?: string;
    /** Error message and invalid styling. */
    error?: JSX.Element;
    /** Hint text below the control. */
    helperText?: JSX.Element;
    /** When true, never render label row or error/helper text (control only). */
    bare?: boolean;
    /** When true, show required indicator on label. */
    required?: boolean;
    /** When true, show "optional" on the label row when not required. Default false. */
    optional?: boolean;
    /** Called when the user interacts with the control while an error is shown, allowing the parent to clear the error. */
    onErrorClear?: () => void;
    /** Component size. 'sm' hides preset strip and shows trigger only. Default 'md'. */
    size?: ComponentSize;
    disabled?: boolean;
    class?: string;
    /** Max number of "last used" colors to keep. 0 to hide. Default 9. */
    lastUsedCount?: number;
    /** Which format(s) to show in the custom panel. Default ['hex']. Use more for Hex/RGB/HSL/HSB tabs. */
    allowedFormats?: ColorFormat[];
    /** Predefined hex colors shown at the bottom of the custom panel, below last used. Use for theme presets etc. */
    predefined?: string[];
}
declare function ColorPicker(props: ColorPickerProps): JSX.Element;

interface FieldPickerOption {
    value: string;
    label: string;
}
interface FieldPickerProps {
    label?: string;
    options: FieldPickerOption[];
    value: string;
    onValueChange: (value: string) => void;
    onAdd: () => void;
    addLabel?: string;
    addIcon?: JSX.Element;
    addDisabled?: boolean;
    placeholder?: string;
    class?: string;
}
declare const FieldPicker: (props: FieldPickerProps) => JSX.Element;

interface ReorderableListItem {
    id: string;
    label: string;
}
interface ReorderableListProps extends JSX.HTMLAttributes<HTMLDivElement> {
    items: ReorderableListItem[];
    onReorder: (ids: string[]) => void;
    showMoveButtons?: boolean;
    onRemove?: (id: string) => void;
    class?: string;
}
declare function ReorderableList(props: ReorderableListProps): JSX.Element;

interface RelativeDateDefaultInputProps {
    value: string;
    onValueChange: (value: string) => void;
    /** Label before the controls (default "Today") */
    prefixLabel?: string;
    /** Label after days (default "day(s)") */
    suffixLabel?: string;
    class?: string;
}
/** Today + sign (+/−) + integer days. Produces stored value like "today+0", "today-7". */
declare function RelativeDateDefaultInput(props: RelativeDateDefaultInputProps): solid_js.JSX.Element;

export { Autocomplete, type AutocompleteOption, type AutocompleteProps, Checkbox, type CheckboxProps, type CheckboxSize, CodeInput, type CodeInputProps, type ColorFormat, ColorPicker, type ColorPickerProps, DatePicker, type DatePickerPreset, type DatePickerProps, DateRangePicker, type DateRangePickerProps, FieldPicker, type FieldPickerOption, type FieldPickerProps, FileUpload, type FileUploadItem, type FileUploadLabels, type FileUploadProps, type FileUploadVariant, MultiSelect, type MultiSelectOption, type MultiSelectProps, NumberField, type NumberFieldProps, RadioGroup, type RadioGroupOption, type RadioGroupProps, RelativeDateDefaultInput, type RelativeDateDefaultInputProps, ReorderableList, type ReorderableListItem, type ReorderableListProps, Select, type SelectOption, type SelectOptionGroup, type SelectProps, Slider, type SliderProps, type SliderSize, Switch, type SwitchProps, TextArea, type TextAreaProps, type TextAreaResize, TimePicker, type TimePickerProps };
