# BOOST Figma Site

FigmaのPCデザイン7画面をもとにしたReact/Vite実装です。モバイル表示は未実装で、後続デザインを受け取った後に追加する前提です。

## Implemented Pages

- `/` - PC
- `/service` - Service
- `/company` - Company
- `/news` - NewsAll
- `/news/detail` - NewsEach
- `/contact` - Contact
- `/privacy` - Privacy

## Commands

この環境では通常PATHのNodeでRollupのmacOSネイティブモジュール署名エラーが出るため、npm scriptsはHomebrew Nodeを優先します。

```bash
/opt/homebrew/bin/npm install
/opt/homebrew/bin/npm run dev -- --port 5173
/opt/homebrew/bin/npm run build
```

## Notes

- Figmaの一時アセットURLは失効するため、画像は `public/assets/` に保存済みです。
- Tailwindは導入せず、通常CSSでFigmaのPC表示に寄せています。
- ルーティングは軽量なpathname分岐です。静的ホスティングに出す場合はSPA fallbackを設定してください。
