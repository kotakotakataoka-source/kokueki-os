"use client";

import { useMemo, useState } from "react";
import { SourceCard } from "@/components/source-card";
import {
  SOURCE_CATEGORY_DESCRIPTIONS,
  SOURCE_CATEGORY_LABELS,
  type SourceCategory,
  type SourceEntry,
} from "@/types/source";

const CATEGORY_ORDER: SourceCategory[] = [
  "primary-data",
  "japan-policy",
  "third-pole",
  "europe-finance",
  "us-policy",
  "china-official",
];

export function SourcesExplorer({ sources }: { sources: SourceEntry[] }) {
  const [activeCategory, setActiveCategory] = useState<SourceCategory | "all">(
    "all"
  );

  const filteredSources = useMemo(() => {
    if (activeCategory === "all") return sources;
    return sources.filter((source) => source.category === activeCategory);
  }, [sources, activeCategory]);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActiveCategory("all")}
          className={`rounded-full border px-3 py-1.5 text-sm font-medium transition-colors ${
            activeCategory === "all"
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border bg-background text-muted-foreground hover:text-foreground"
          }`}
        >
          すべて
        </button>
        {CATEGORY_ORDER.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`rounded-full border px-3 py-1.5 text-sm font-medium transition-colors ${
              activeCategory === category
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-background text-muted-foreground hover:text-foreground"
            }`}
          >
            {SOURCE_CATEGORY_LABELS[category]}
          </button>
        ))}
      </div>

      {activeCategory !== "all" && (
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          {SOURCE_CATEGORY_DESCRIPTIONS[activeCategory]}
        </p>
      )}

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {filteredSources.map((source) => (
          <div key={source.slug} id={source.slug}>
            <SourceCard source={source} />
          </div>
        ))}
      </div>
    </div>
  );
}
