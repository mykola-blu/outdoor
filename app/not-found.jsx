import SITE_NAME from "src/constants/siteName"

export async function generateMetadata() {
  return {
    title: `404 | ${SITE_NAME}`,
    description: "Uh-oh! It appears this page doesn't exist.",
  }
}

export default function Custom404() {
  return (
    <div class="grid h-[600px] place-content-center bg-white px-4">
      <h1 class="uppercase tracking-widest text-gray-500">404 | Not Found</h1>
    </div>
  )
}
