/**
 * v0 by Vercel.
 * @see https://v0.dev/t/tatP1TWBnrw
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <FootprintsIcon className="h-6 w-6" />
          <span className="text-lg font-semibold">Discount Tires</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            All Tires
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            All-Season
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Winter
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Performance
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <img
                  src="/placeholder.svg"
                  width="550"
                  height="550"
                  alt="Hero Tire"
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Discount Tires for Every Season
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Find the perfect tires for your vehicle at unbeatable prices. Browse our selection of all-season,
                    winter, and performance tires today.
                  </p>
                </div>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  prefetch={false}
                >
                  Browse Tires
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Tire Categories</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Browse our selection of tires for every driving condition and vehicle type.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <Link
                  href="#"
                  className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
                  prefetch={false}
                >
                  <div className="text-lg font-bold">All-Season</div>
                  <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                    Versatile tires for year-round driving.
                  </div>
                </Link>
              </div>
              <div className="grid gap-1">
                <Link
                  href="#"
                  className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
                  prefetch={false}
                >
                  <div className="text-lg font-bold">Winter</div>
                  <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                    Designed for superior traction in snow and ice.
                  </div>
                </Link>
              </div>
              <div className="grid gap-1">
                <Link
                  href="#"
                  className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
                  prefetch={false}
                >
                  <div className="text-lg font-bold">Performance</div>
                  <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                    High-performance tires for enhanced handling and control.
                  </div>
                </Link>
              </div>
              <div className="grid gap-1">
                <Link
                  href="#"
                  className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
                  prefetch={false}
                >
                  <div className="text-lg font-bold">All-Terrain</div>
                  <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                    Rugged tires for off-road and mixed-terrain driving.
                  </div>
                </Link>
              </div>
              <div className="grid gap-1">
                <Link
                  href="#"
                  className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
                  prefetch={false}
                >
                  <div className="text-lg font-bold">Specialty</div>
                  <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                    Unique tires for specific vehicle types or driving needs.
                  </div>
                </Link>
              </div>
              <div className="grid gap-1">
                <Link
                  href="#"
                  className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
                  prefetch={false}
                >
                  <div className="text-lg font-bold">Truck &amp; SUV</div>
                  <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                    Durable and capable tires for larger vehicles.
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Featured Tires</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Check out our top-selling tires for your vehicle.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              <div className="grid gap-4">
                <div className="grid gap-2.5 relative group">
                  <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                    <span className="sr-only">View All-Season Tire 1</span>
                  </Link>
                  <img
                    src="/placeholder.svg"
                    alt="All-Season Tire 1"
                    width={200}
                    height={200}
                    className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
                  />
                  <div className="grid gap-1">
                    <div className="flex items-center gap-4">
                      <h3 className="font-semibold">All-Season Tire 1</h3>
                      <h4 className="font-semibold ml-auto">$99.99</h4>
                    </div>
                    <p className="text-sm leading-none">Versatile all-season tire for year-round driving.</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  Add to Cart
                </Button>
              </div>
              <div className="grid gap-4">
                <div className="grid gap-2.5 relative group">
                  <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                    <span className="sr-only">View Winter Tire 1</span>
                  </Link>
                  <img
                    src="/placeholder.svg"
                    alt="Winter Tire 1"
                    width={200}
                    height={200}
                    className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
                  />
                  <div className="grid gap-1">
                    <div className="flex items-center gap-4">
                      <h3 className="font-semibold">Winter Tire 1</h3>
                      <h4 className="font-semibold ml-auto">$129.99</h4>
                    </div>
                    <p className="text-sm leading-none">Designed for superior traction in snow and ice.</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  Add to Cart
                </Button>
              </div>
              <div className="grid gap-4">
                <div className="grid gap-2.5 relative group">
                  <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                    <span className="sr-only">View Performance Tire 1</span>
                  </Link>
                  <img
                    src="/placeholder.svg"
                    alt="Performance Tire 1"
                    width={200}
                    height={200}
                    className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
                  />
                  <div className="grid gap-1">
                    <div className="flex items-center gap-4">
                      <h3 className="font-semibold">Performance Tire 1</h3>
                      <h4 className="font-semibold ml-auto">$149.99</h4>
                    </div>
                    <p className="text-sm leading-none">High-performance tire for enhanced handling and control.</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  Add to Cart
                </Button>
              </div>
              <div className="grid gap-4">
                <div className="grid gap-2.5 relative group">
                  <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                    <span className="sr-only">View All-Terrain Tire 1</span>
                  </Link>
                  <img
                    src="/placeholder.svg"
                    alt="All-Terrain Tire 1"
                    width={200}
                    height={200}
                    className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
                  />
                  <div className="grid gap-1">
                    <div className="flex items-center gap-4">
                      <h3 className="font-semibold">All-Terrain Tire 1</h3>
                      <h4 className="font-semibold ml-auto">$179.99</h4>
                    </div>
                    <p className="text-sm leading-none" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function FootprintsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z" />
      <path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z" />
      <path d="M16 17h4" />
      <path d="M4 13h4" />
    </svg>
  )
}
