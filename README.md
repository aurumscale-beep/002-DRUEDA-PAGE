# SITE UEDA — pacote pronto para GitHub Pages

Esta pasta contém o código-fonte completo do site odontológico e uma cópia local de todas as imagens usadas no projeto. Ela foi preparada para ser enviada manualmente a um repositório GitHub sem depender de links de imagens do ambiente Manus.

## O que já está incluso

- Aplicação React, TypeScript, Vite e Tailwind CSS;
- páginas Home, Implantes, Invisalign, Clareamento e Lentes;
- imagens e logos em `client/public/assets/`;
- favicon local;
- imagens locais em `client/public/assets/`, sem dependência do armazenamento Manus;
- metadados preparados para `https://uedaodontologia.com.br/`;
- mapa por incorporação pública, sem chave de API ou proxy Manus;
- sem `node_modules`, histórico Git ou arquivos temporários de desenvolvimento.

## Como enviar para o GitHub

1. Baixe e descompacte o arquivo ZIP entregue.
2. No GitHub, crie um repositório privado chamado `002-DRUEDA-PAGE`.
3. Abra o repositório e escolha **Add file → Upload files**.
4. Selecione **todo o conteúdo dentro desta pasta**, incluindo os arquivos ocultos como `.gitignore`, e envie.
5. Confirme em **Commit changes**.

## Como publicar no GitHub Pages

1. Após enviar os arquivos, abra **Settings → Pages** no repositório.
2. Em **Build and deployment**, selecione **GitHub Actions**.
3. O workflow `Publicar no GitHub Pages` será executado automaticamente a cada atualização na branch `main`.
4. Depois de concluído, o endereço inicial será:

   ```text
   https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/
   ```

O pacote já inclui o workflow, build estático, fallback de páginas internas e caminhos compatíveis com o subdiretório do GitHub Pages. Nenhum arquivo adicional é necessário.

## Teste local opcional

Com Node.js 22 e pnpm instalados, abra um terminal dentro desta pasta e execute:

```bash
pnpm install --frozen-lockfile
pnpm build
pnpm preview
```

## Domínio próprio

Depois de comprar `uedaodontologia.com.br`, abra **Settings → Pages → Custom domain** no GitHub e informe o domínio. O GitHub exibirá os registros DNS que devem ser copiados ao Registro.br. Quando o domínio próprio estiver confirmado, crie a variável de repositório `VITE_BASE_PATH` com o valor `/` em **Settings → Secrets and variables → Actions → Variables**, para que o site funcione diretamente na raiz do domínio.

## Observação importante

As imagens foram trazidas para a pasta local `client/public/assets/`. Portanto, elas não precisam mais permanecer no armazenamento Manus para funcionar quando o site for hospedado em outro serviço.
