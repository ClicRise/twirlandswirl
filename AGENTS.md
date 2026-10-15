<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Website architecture
- Keep the shared storefront header and footer in the root layout and give each content page its own route and metadata so pages remain directly shareable.
- Keep product data, business links, and enquiry-message construction in `src/lib/business.ts` to ensure all contact actions stay consistent.
- Store uploaded photographs as Lovable Assets pointers; use the real padded logo file only for the favicon so media stays lightweight.
- Keep all visual tokens and reusable storefront styles in `src/styles.css` so page styling remains consistent.
- The storefront is an enquiry catalogue, not a checkout; send custom request details directly to WhatsApp without persisting personal data.
