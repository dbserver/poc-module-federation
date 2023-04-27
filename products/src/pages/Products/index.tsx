import { ProductCard } from "../../components/ProductCard";

export default function Products() {
    return (
        <div className="flex flex-row flex-wrap gap-8 m-10">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>

    );
}