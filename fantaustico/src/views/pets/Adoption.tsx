import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../service/api';
import type { Pet } from '../../types/models';

const Adoption = () => {
  const [pets, setPets] = useState<Pet[]>([]);
  const [loadingPets, setLoadingPets] = useState(true);

  useEffect(() => {
    const loadPets = async () => {
      try {
        const data = await api.getPets();
        setPets(data as Pet[]);
      } catch (err) {
        console.error('Erro ao carregar pets para adoção', err);
      } finally {
        setLoadingPets(false);
      }
    };

    loadPets();
  }, []);

  const featuredPets = useMemo(() => pets.slice(0, 12), [pets]);
  const sanitizePhone = (value?: string) => (value ? value.replace(/\D/g, '') : '');

  return (
    <div className="min-h-screen pb-16 text-slate-900 relative z-10">
      <main className="max-w-6xl mx-auto px-4 pt-6 space-y-8">
        <section className="glass rounded-3xl p-6 md:p-10 space-y-3 fade-in-up">
          <p className="text-sm font-semibold text-[var(--color-primary)]">Adoção</p>
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-heading)]">Encontre um novo amigo</h1>
          <p className="text-[var(--color-muted)]">
            Animais disponíveis para adoção responsável. Fale com os responsáveis ou preencha o formulário para
            demonstrar interesse.
          </p>
        </section>

        <section className="space-y-4 fade-in-up">
          {loadingPets ? (
            <div className="glass rounded-2xl p-6 text-lg text-slate-600">Carregando pets...</div>
          ) : featuredPets.length === 0 ? (
            <div className="glass rounded-2xl p-6 text-lg text-slate-600">Nenhum pet para adoção encontrado.</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {featuredPets.map((pet) => (
                <article key={pet.id} className="glass rounded-2xl overflow-hidden card-hover flex flex-col">
                  <div className="h-48 bg-slate-100 flex items-center justify-center">
                    {pet.imageUrl ? (
                      <img src={pet.imageUrl} alt={`Foto de ${pet.name}`} className="h-full w-full object-cover" />
                    ) : (
                      <span className="text-4xl text-slate-300">🐶</span>
                    )}
                  </div>
                  <div className="p-4 space-y-2 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      {pet.ageLabel && <span className="badge-soft">{pet.ageLabel}</span>}
                      {pet.tags?.includes('vacinado') && (
                        <span className="badge-soft bg-blue-50 text-blue-700 border-blue-100">Vacinado</span>
                      )}
                      {pet.tags?.includes('castrado') && (
                        <span className="badge-soft bg-amber-50 text-amber-700 border-amber-100">Castrado</span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-[var(--color-heading)]">{pet.name}</h3>
                    <p className="text-sm text-[var(--color-muted)]">{pet.description || 'Sem descrição'}</p>
                    <p className="text-sm text-slate-600">
                      Local: <span className="font-semibold">{pet.location || 'Não informado'}</span>
                    </p>
                  </div>
                  <div className="p-4 flex flex-col gap-2">
                    <Link to="/registrar" className="btn-primary text-center">
                      Quero Adotar
                    </Link>
                    {pet.contact && (
                      <div className="grid grid-cols-2 gap-2">
                        <a href={`tel:${sanitizePhone(pet.contact)}`} className="btn-ghost text-sm">
                          Ligar
                        </a>
                        <a
                          href={`https://wa.me/${sanitizePhone(pet.contact)}`}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-secondary text-sm"
                        >
                          WhatsApp
                        </a>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default Adoption;
