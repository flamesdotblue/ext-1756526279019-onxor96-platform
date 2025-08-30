import { LayoutDashboard, Image as ImageIcon, Mic, Sparkles } from 'lucide-react';

const features = [
  {
    icon: LayoutDashboard,
    title: 'Kanban that clicks',
    desc: 'Snap tasks, labels, and assignees with buttery-smooth drag and drop, plus realtime cursors for a truly shared flow.'
  },
  {
    icon: ImageIcon,
    title: 'Shared moodboards',
    desc: 'Pin shots, palettes, and components. Comment inline and vote to converge on direction faster.'
  },
  {
    icon: Mic,
    title: 'Lightweight audio huddles',
    desc: 'Jump into ephemeral voice rooms to unblock quickly—no calendar chaos, just push-to-talk.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-700 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-amber-500" />
            Built for bright, collaborative teams
          </div>
          <h2 className="mt-4 font-extrabold tracking-tight text-3xl sm:text-4xl">Everything in one playful canvas</h2>
          <p className="mt-3 text-gray-600">Bring planning, inspiration, and voice together so your team can ship with confidence and joy.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-500 to-fuchsia-500 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 rounded-2xl border border-gray-200 bg-gradient-to-tr from-slate-50 to-white p-8 text-center">
          <p className="text-gray-700">Loved by product designers, brand studios, and remote squads.</p>
          <div className="flex -space-x-2">
            {[5,12,26,38,41,55].map(n => (
              <img key={n} src={`https://i.pravatar.cc/64?img=${n}`} className="h-8 w-8 rounded-full ring-2 ring-white object-cover" alt="" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
