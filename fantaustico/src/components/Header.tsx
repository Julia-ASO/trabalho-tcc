import { useEffect, useState, type ReactNode } from 'react';
import { Link, NavLink } from 'react-router-dom';
import RegisterPet from '../views/pets/RegisterPet';
import NewCampaign from '../views/donations/NewCampaign';

const navLinkClass =
  'text-sm font-medium text-slate-600 hover:text-slate-900 transition px-3 py-2 rounded-lg';

const Header = () => {
  const [openPetModal, setOpenPetModal] = useState(false);
  const [openCampaignModal, setOpenCampaignModal] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenPetModal(false);
        setOpenCampaignModal(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const Modal = ({
    open,
    onClose,
    title,
    children,
  }: {
    open: boolean;
    onClose: () => void;
    title: string;
    children: ReactNode;
  }) => {
    if (!open) return null;
    return (
      <div
        className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-white/70 p-4"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
            <button
              onClick={onClose}
              className="text-slate-500 hover:text-slate-900 rounded-full p-2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-300"
              aria-label="Fechar modal"
            >
              ✕
            </button>
          </div>
          <div className="max-h-[80vh] overflow-y-auto">{children}</div>
        </div>
      </div>
    );
  };

  return (
    <header className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b border-white/60 shadow-[0_6px_30px_-12px_rgba(15,23,42,0.25)]">
      <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center justify-between gap-3">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/fant.png"
              alt="fantAUstico"
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-2xl object-contain shadow-lg shadow-primary/30"
            />
            <div>
              <p className="text-xs sm:text-sm text-slate-500 leading-tight">Plataforma de Adoção e Denúncias para Cães</p>
              <h1 className="text-lg sm:text-2xl font-semibold text-slate-900 leading-tight">fantAUstico</h1>
            </div>
          </Link>
        </div>

        <nav className="flex flex-wrap items-center gap-2">
          <NavLink
            to="/"
            className={({ isActive }) => `${navLinkClass} ${isActive ? 'bg-slate-100 text-slate-900' : ''}`}
          >
            Início
          </NavLink>
          <NavLink
            to="/adocao"
            className={({ isActive }) => `${navLinkClass} ${isActive ? 'bg-slate-100 text-slate-900' : ''}`}
          >
            Adoção
          </NavLink>
          <NavLink
            to="/campanhas"
            className={({ isActive }) => `${navLinkClass} ${isActive ? 'bg-slate-100 text-slate-900' : ''}`}
          >
            Campanhas
          </NavLink>
          <NavLink
            to="/casos"
            className={({ isActive }) => `${navLinkClass} ${isActive ? 'bg-slate-100 text-slate-900' : ''}`}
          >
            Casos
          </NavLink>
        </nav>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setOpenCampaignModal(true)}
            className="rounded-full border border-secondary/30 px-4 py-2 text-secondary text-sm font-medium hover:bg-secondary/10 transition w-full sm:w-auto text-center"
          >
            Nova Campanha
          </button>
          <button
            onClick={() => setOpenPetModal(true)}
            className="rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-2 text-white text-sm font-semibold shadow-lg shadow-primary/30 w-full sm:w-auto text-center"
          >
            Novo Caso ou Adoção
          </button>
        </div>
      </div>

      <Modal open={openPetModal} onClose={() => setOpenPetModal(false)} title="Novo Caso ou Adoção">
        <RegisterPet />
      </Modal>

      <Modal open={openCampaignModal} onClose={() => setOpenCampaignModal(false)} title="Nova Campanha">
        <NewCampaign />
      </Modal>
    </header>
  );
};

export default Header;
