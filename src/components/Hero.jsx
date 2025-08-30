import { Play, ArrowRight } from 'lucide-react';

function Avatar({ src, alt }) {
  return (
    <img src={src} alt={alt} className="h-6 w-6 rounded-full ring-2 ring-white object-cover" />
  );
}

function DashboardMockup() {
  return (
    <div className="relative w-full rounded-2xl border border-gray-200 bg-white shadow-xl overflow-hidden">
      <div className="flex items-center gap-2 border-b border-gray-100 px-4 py-2">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </div>
        <div className="ml-3 text-xs text-gray-500">loopwork.app/workspace/alpha</div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 p-4">
        <section className="lg:col-span-7 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-gray-800">Kanban — Design Sprint</h3>
            <div className="text-xs text-gray-500">This week</div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {['Backlog','In Progress','Review'].map((col) => (
              <div key={col} className="rounded-lg bg-gray-50 p-2">
                <div className="mb-2 px-1 text-[11px] font-medium text-gray-600 uppercase tracking-wide">{col}</div>
                <div className="space-y-2">
                  {[1,2,3].map((i) => (
                    <div key={i} className="rounded-md bg-white p-2 shadow-sm border border-gray-200">
                      <div className="text-[13px] font-medium text-gray-800 truncate">{col} task {i}</div>
                      <div className="mt-1 flex items-center justify-between">
                        <div className="flex -space-x-2">
                          <Avatar src={`https://i.pravatar.cc/48?img=${(i*7)%70}`} alt="" />
                          <Avatar src={`https://i.pravatar.cc/48?img=${(i*9)%70}`} alt="" />
                        </div>
                        <span className="rounded bg-indigo-50 px-1.5 py-0.5 text-[10px] font-medium text-indigo-700">UI</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <aside className="lg:col-span-5 space-y-4">
          <div className="rounded-xl border border-gray-200 bg-white overflow-hidden">
            <div className="flex items-center justify-between border-b border-gray-100 px-3 py-2">
              <h4 className="text-sm font-semibold text-gray-800">Shared Moodboard</h4>
              <button className="text-xs text-gray-500 hover:text-gray-700">Open</button>
            </div>
            <div className="grid grid-cols-3 gap-1 p-2">
              {[1,2,3,4,5,6].map((i) => (
                <div key={i} className="aspect-square overflow-hidden rounded-md">
                  <img
                    className="h-full w-full object-cover"
                    src={`https://images.unsplash.com/photo-15${30+i}000000-0a0a0a0a0a0a?q=80&w=400&auto=format&fit=crop`}
                    alt="Moodboard tile"
                    onError={(e)=>{e.currentTarget.src=`https://picsum.photos/seed/${i}/400/400`;}}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 bg-gradient-to-tr from-slate-900 to-slate-800 text-white">
            <div className="flex items-center justify-between px-4 pt-3">
              <div className="text-sm font-semibold">Audio Huddle</div>
              <span className="text-[11px] text-white/70">Live</span>
            </div>
            <div className="px-4 pb-4 pt-2">
              <div className="flex items-center gap-2">
                <button className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500 hover:bg-emerald-400 shadow">
                  <Play className="h-4 w-4 text-white" />
                </button>
                <div className="flex -space-x-2">
                  {[11,22,33,44].map((n)=> (
                    <img key={n} src={`https://i.pravatar.cc/64?img=${n}`} alt="" className="h-7 w-7 rounded-full ring-2 ring-slate-800 object-cover" />
                  ))}
                </div>
                <span className="ml-2 text-xs text-white/80">Design Standup • 05:23</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-12 lg:pt-24 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Now with Audio Huddles
            </div>
            <h1 className="font-extrabold tracking-tight text-4xl sm:text-5xl lg:text-6xl">
              A productivity OS for creative teams
            </h1>
            <p className="text-lg text-gray-600">
              Loopwork blends Kanban, shared moodboards, and audio huddles into a single playful, collaborative workspace.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a href="#" className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-5 py-3 text-sm font-medium text-white shadow hover:bg-black">
                Start free trial
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#showcase" className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-5 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50">
                View live demo
              </a>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <div>Unlimited guests</div>
              <div>Real-time presence</div>
              <div>Figma-friendly</div>
            </div>
          </div>

          <div className="lg:col-span-7" id="showcase">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
