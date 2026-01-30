# Shadow Tokens

## Shadow Scale

| Token | CSS Variable | Value | Usage |
|-------|--------------|-------|-------|
| none | `--shadow-none` | none | No shadow |
| sm | `--shadow-sm` | 0 1px 2px 0 rgb(0 0 0 / 0.05) | Subtle elevation |
| DEFAULT | `--shadow` | 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1) | Default shadow |
| md | `--shadow-md` | 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1) | Medium elevation |
| lg | `--shadow-lg` | 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1) | High elevation |
| xl | `--shadow-xl` | 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1) | Very high elevation |
| 2xl | `--shadow-2xl` | 0 25px 50px -12px rgb(0 0 0 / 0.25) | Maximum elevation |
| inner | `--shadow-inner` | inset 0 2px 4px 0 rgb(0 0 0 / 0.05) | Inset/pressed state |

## Common Usage Patterns

| Component | Token | Description |
|-----------|-------|-------------|
| Cards (resting) | sm | Subtle lift |
| Cards (hover) | md | Elevated on hover |
| Dropdowns | lg | Floating above content |
| Modals/Dialogs | xl | Maximum separation |
| Buttons (pressed) | inner | Pressed appearance |
| Tooltips | md | Floating indicators |
| Popovers | lg | Floating panels |
| Navigation (sticky) | md | Scroll shadow |

## Border Width Tokens

| Token | CSS Variable | Value | Usage |
|-------|--------------|-------|-------|
| DEFAULT | `--border-width/border` | 1px | Standard borders |
| 2 | `--border-width/border-2` | 2px | Emphasis borders (blockquotes) |
| 4 | `--border-width/border-4` | 4px | Heavy borders |
| 8 | `--border-width/border-8` | 8px | Extra heavy borders |

## Verified Border Widths (Extracted from Figma)

| Token | Value | Source |
|-------|-------|--------|
| border | 1px | Table borders, dividers |
| border-2 | 2px | Blockquote left border |

## Ring/Focus Tokens

| Token | Value | Usage |
|-------|-------|-------|
| ring-0 | none | No ring |
| ring-1 | 1px | Subtle focus |
| ring-2 | 2px | Default focus |
| ring-4 | 4px | Emphasis focus |
| ring-8 | 8px | Maximum focus |
| ring-offset-0 | 0px | No offset |
| ring-offset-1 | 1px | Subtle offset |
| ring-offset-2 | 2px | Default offset |
| ring-offset-4 | 4px | Large offset |
| ring-offset-8 | 8px | Maximum offset |

## CSS Custom Properties

```css
:root {
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  --shadow-inner: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
  
  /* Border Widths */
  --border-width: 1px;
  --border-width-2: 2px;
  --border-width-4: 4px;
  --border-width-8: 8px;
}
```

## Tailwind Classes

### Shadows
```
shadow-none
shadow-sm
shadow
shadow-md
shadow-lg
shadow-xl
shadow-2xl
shadow-inner
```

### Borders
```
border          /* 1px */
border-2        /* 2px */
border-4        /* 4px */
border-8        /* 8px */
border-0        /* 0px */
```

### Rings (Focus)
```
ring-0 ring-1 ring-2 ring-4 ring-8
ring-offset-0 ring-offset-1 ring-offset-2 ring-offset-4 ring-offset-8
```

---
*Last extracted: December 16, 2025*
