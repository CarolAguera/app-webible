# 💻 HACKATHON [Api-Biblia-Online](https://www.abibliadigital.com.br)

# Estrutura de Pastas do projeto

 ```md
└─src
   ├─ api
   │  ├─ index.ts
   │  ├─ searchBook.ts
   │  ├─ searchChapters.ts
   │  └─ searchVersions.ts
   ├─ components
   │  ├─ AccordionBody
   │  │   └─ AccordionBody.tsx
   │  ├─ ButtonsChapters
   │  │  └─ ButtonsChapters.tsx
   │  └─ Header
   │     └─ Header.tsx
   ├─ config
   │  └─ index.ts
   ├─ pages
   │  ├─ ChaptersWithVerse.tsx
   │  └─ Home.tsx
   ├─ types
   │  └─ index.ts
   └─ utils
      └─ getButtonsChapters.ts
```

# Executar o projeto em ambiente local

1. Clonar o projeto:

```console
git clone https://github.com/CarolAguera/app-bible.git
```

3. Instalar as dependências:

```console
  yarn
```

4. Executar:

- Para a versão de desenvolvimento:

  ```console
  yarn dev
  ```

- Para a versão de produção:

  ```console
  yarn build;
  yarn start
  ```
