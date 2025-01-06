import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const products = [
  { id: 1, name: "Standard Cabinet", description: "Our bestselling all-purpose cabinet", price: "$299" },
  { id: 2, name: "Heavy-Duty Cabinet", description: "Extra sturdy for industrial use", price: "$499" },
  { id: 3, name: "Slim Storage Cabinet", description: "Perfect for tight spaces", price: "$249" },
]

export default function Products() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
              <CardDescription>{product.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{product.price}</p>
            </CardContent>
            <CardFooter>
              <Button>Learn More</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

