# React Flashcards
A basic flashcards app built with React and node.js.

## Components
### App
#### Properties
| Name | Type | Description |
| --- | --- | --- |
| Decks | List<Deck> | List of card decks in this app |
| ActiveDeck | Deck | Reference to currently active card deck. Can be null |

### Card
#### Properties
| Name | Type | Description |
| --- | --- | --- |
| Front | Text | Content on front of card |
| Back | Text | Content on back of card |
| CurrFace | ENUM | The currently active face of the card. Valid values are: FRONT, BACK |
#### Actions
| Name | Return Val | Description |
| --- | --- | --- |
| Flip | `null` | Toggle current face of card |
| Edit | `null` | Enter edit mode |

### Deck
#### Properties
| Name | Type | Description |
| --- | --- | --- |
| Cards | List<Card> | List of cards |
| Title | Text | Name of card deck |
#### Actions
| Name | Return Val | Description |
| --- | --- | --- |
| Open/Close | `null` | Toggle state of deck and active deck value |
| View All | `null` | Preview all cards in deck |
| Add Card | `null` | Add a card to this deck |
| Remove Card | `null` | Add a card to this deck |