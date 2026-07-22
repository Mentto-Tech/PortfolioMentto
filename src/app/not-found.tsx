import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F3F1EB] px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-[#083D5F]">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-[#083D5F]">
          Página não encontrada
        </h2>
        <p className="mt-2 text-sm text-[#333]/60">
          A página que você está procurando não existe ou foi movida.
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-[#083D5F] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#083D5F]/85"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}
