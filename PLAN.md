# PLAN.md – Oldalterv

## 1. Téma
Falusi termékek és háztáji baromfi értékesítése (családi gazdaság).

A weboldal célja: bemutatni a családi termelést, a friss baromfi kínálatot, a szállítási útvonalakat, valamint egy kereshető terméklistán keresztül segíteni a vásárlást.

## 2. Oldalak

### **2.1. Főoldal (index.html)**
- Nagy hero kép (gazdaság / baromfi)
- Cégnév + szlogen
- Rövid összefoglaló a szolgáltatásról
- Szolgáltatások sáv:
  - Háztáji baromfi
  - Előrendelés
  - Házhozszállítás
- Kiemelt termékek (3–4 kártya)
- “Rólunk mondták” – vásárlói vélemények
- Lábléc: cím, telefonszám, közösségi linkek

### **2.2. Galéria (gallery.html)**
- Legalább 10 kép
  - baromfiudvar
  - ólak
  - takarmányozás
  - csomagolás
  - családi fotók
- 1–2 rövid videó (opcionális)

### **2.3. Terméklista / Adattábla (products.html)**  
Funkciók:
- Keresőmező
- Terméklista kártyák vagy táblázat
- Dinamikus betöltés JSON-ból
- Fetch API használata
- Tömbök, objektumok, arrow function, ES modules

Megjelenített adatok:
- Termék neve
- Típus / alcsoport
- Ár (Ft/kg)
- Súly
- Szolgáltatások (darabolás, házhozszállítás)

### **2.4. Rólunk (about.html)**
- A családi gazdaság története
- Hogyan történik a nevelés? (természetes takarmány, gyógyszermentes tartás)
- Szállítási területek:
  - Budapest, Székesfehérvár, Kaposvár, Kecskemét, Pécs
  - Tengelic 100 km-es körzete
- Táblázat a fő árakról
- Kapcsolat űrlap:
  - Név, Email, Üzenet
  - Terméktípus választó
  - GDPR checkbox
- JavaScript validáció

## 3. Követelmények (technikai terv)

### **3.1. HTML**
- 4 oldal: index, gallery, products, about
- Minden oldalon top menü (header + nav)
- Szemantikus elemek:
  - header, nav, main, section, article, footer
- Főoldalon minden aloldalból lesz rövid kivonat + tovább gomb

### **3.2. CSS**
- Bootstrap vagy Tailwind használata
- Minimum 40 sor saját CSS (`assets/styles/style.css`)
  - Hero szekciók
  - Kártya hover
  - Saját galéria-grid
  - Reszponzív finomhangolás

### **3.3. JavaScript**
Mappák:
`assets/scripts/`

Fájlok:
- **fetchProducts.js**  
  - JSON beolvasása  
  - terméklista renderelése  
  - arrow function + const/let használat  
- **formValidation.js**  
  - Kapcsolati űrlap validálása  
- ES modules / import használata

### **3.4. JSON adatfájl**
- `assets/json/products.json`
- Statikus lista a baromfi árakról és súlykategóriákról

### **3.5. Képek**
- helye: `assets/images`
- legalább 10 db a galériához
- plusz képek a főoldalhoz és termékekhez



