import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen pb-16 text-slate-900 relative z-10">
      <main className="max-w-6xl mx-auto px-4 pt-8 space-y-8">
        <section
          id="inicio"
          className="glass rounded-3xl p-6 md:p-10 grid md:grid-cols-2 gap-8 items-center card-hover fade-in-up"
        >
          <div className="space-y-4">
            <p className="text-sm font-semibold text-[var(--color-primary)]">Proteção e Adoção Responsável</p>
            <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-heading)] leading-tight">
              Encontre um novo amigo e apoie quem luta contra maus-tratos.
            </h1>
            <p className="text-base text-[var(--color-muted)]">
              Adoção, campanhas de vacinação e castração, e um canal direto para denúncias. Tudo em um só lugar,
              sem burocracia.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/adocao" className="btn-primary">
                Ver animais para adoção
              </Link>
              <Link to="/campanhas" className="btn-ghost">
                Ver campanhas
              </Link>
              <Link to="/casos" className="btn-ghost">
                Ver casos/denúncias
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-secondary)]/30 blur-3xl" />
            <div className="relative h-64 md:h-80 rounded-3xl bg-white/80 border border-white/70 flex items-center justify-center">
              <span className="text-5xl">🐾</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
