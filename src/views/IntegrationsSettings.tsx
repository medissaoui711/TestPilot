import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ShieldAlert, Lock, Terminal } from 'lucide-react';

export const IntegrationsSettings: React.FC = () => {
  const { dir } = useLanguage();

  return (
    <div className="min-h-full bg-[var(--bg-primary)] text-[var(--text-primary)] pb-12 font-sans" dir={dir}>
      <div className="max-w-4xl mx-auto">
        <header className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-500 dark:from-white dark:via-zinc-200 dark:to-zinc-400 bg-clip-text text-transparent">
            إعدادات الموصلات والربط (Public Demo)
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 mt-2 text-sm md:text-base">
            إدارة وتوصيل الخدمات الخارجية (GitHub و Google Drive و CI/CD).
          </p>
        </header>

        <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-8 text-center backdrop-blur-sm shadow-sm space-y-4">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-500 mb-2">
            <Lock className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
            ميزة متاحة حصرياً في النسخة الخاصة (Private Core Edition)
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto leading-relaxed">
            تكاملات الموصلات الحقيقية (مثل الربط المباشر مع GitHub Apps، Webhooks، Google Drive API، والأنظمة السحابية) متوفرة فقط في المحرك الخاص والمثبت على خوادم المؤسسات. هذه النسخة العامة هي واجهة عرض توضيحية (Public Demo) بحتة.
          </p>
          <div className="pt-4 flex items-center justify-center gap-2 text-xs font-mono text-zinc-500">
            <Terminal className="h-4 w-4" />
            <span>Mode: Client-Side Simulation & Mock Evaluation</span>
          </div>
        </div>
      </div>
    </div>
  );
};
