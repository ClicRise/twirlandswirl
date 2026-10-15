import { createFileRoute, Link, notFound } from '@tanstack/react-router';
import { ArrowLeft, ArrowUpRight, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/store/shared';
import { pageHead, products, productEnquiry } from '@/lib/business';

export const Route = createFileRoute('/products/$slug')({
  loader: ({ params }) => {
    const product = products.find((item) => item.slug === params.slug);
    if (!product) throw notFound();
    return product;
  },
  head: ({ params }) => {
    const product = products.find((item) => item.slug === params.slug);
    return product
      ? pageHead(product.name, product.description)
      : pageHead('Product not found', 'This handmade crochet product could not be found.');
  },
  component: ProductDetails,
});

function ProductDetails() {
  const product = Route.useLoaderData();
  const recommendations = [
    ...products.filter((item) => item.slug !== product.slug && item.category === product.category),
    ...products.filter((item) => item.slug !== product.slug && item.category !== product.category),
  ].slice(0, 3);

  return (
    <>
      <section className="product-detail section site-width">
        <div className="product-detail-photo-wrap">
          <img className="product-detail-photo" src={product.image} alt={product.name} />
        </div>
        <div className="product-detail-copy">
          <Link to="/collection" className="product-detail-back">
            <ArrowLeft size={15} /> Back to the collection
          </Link>
          <div className="eyebrow product-detail-eyebrow">
            <Heart size={13} /> Handmade / {product.category}
          </div>
          <h1>{product.name}</h1>
          <p className="product-detail-price">
            ₹{product.price.toLocaleString('en-IN')}
            <span>Sample price · Ask us for current pricing</span>
          </p>
          <p className="product-detail-description">{product.description}</p>
          <p className="product-detail-note">
            Each piece is made by hand by Aparna in Mumbai. Send us a message to ask about this piece.
          </p>
          <Button asChild size="lg" className="product-detail-enquiry">
            <a href={productEnquiry(product.name)} target="_blank" rel="noreferrer">
              Ask about this piece on WhatsApp <ArrowUpRight size={16} />
            </a>
          </Button>
        </div>
      </section>
      <section className="recommended-products section site-width">
        <div className="section-heading">
          <div>
            <div className="eyebrow">A few more handmade favourites</div>
            <h2>Recommended Products</h2>
            <p>More little things to love, picked from the collection.</p>
          </div>
          <Link to="/collection" className="text-link">
            Browse the collection <ArrowUpRight size={14} />
          </Link>
        </div>
        <div className="product-grid">
          {recommendations.map((recommended) => (
            <ProductCard key={recommended.slug} product={recommended} />
          ))}
        </div>
      </section>
    </>
  );
}
