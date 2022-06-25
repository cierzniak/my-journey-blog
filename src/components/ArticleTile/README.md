# Kafelek artykułu

Kafelek artykułu wykorzystywany podczas prezentacji dostępnych artykułów
(wpisów) na stronie głównej oraz liście historii artykułów.

## Parametry

| Parametr   | Typ      | Przykład                                 |
| ---------- | -------- | ---------------------------------------- |
| `title`    | `string` | `'Spotkanie z Koziołkami'`               |
| `date`     | `string` | `'2022-03-31'`                           |
| `imageUrl` | `string` | `'https://cdn.example.com/article1.jpg'` |

## Przykład zastosowania

```jsx
import ArticleTile from "../path/to/components/ArticleTile";

const MyPage = () => (
  <div
    style={{
      display: "grid",
      gap: "0.5rem",
      gridTemplateColumns: "repeat(4, 1fr)",
    }}
  >
    <Tile
      title="Testowy artykuł o Poznaniu"
      date="2022-06-25"
      imageUrl="https://picsum.photos/300/200"
    />
    <Tile
      title="Testowy artykuł o Wrocławiu"
      date="2022-06-30"
      imageUrl="https://picsum.photos/300/200"
    />
  </div>
);
```
