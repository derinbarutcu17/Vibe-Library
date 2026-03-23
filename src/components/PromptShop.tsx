'use client';

import { useDeferredValue, useEffect, useState } from 'react';
import styles from './PromptShop.module.css';
import PromptProductCard from './PromptProductCard';
import { promptProducts, categories } from '@/data/prompt-products';
import { Icon } from '@iconify/react';
import { useI18n } from '@/i18n';

interface PromptShopProps {
    initialCategory?: string;
}

function normalizeSearchText(value: string) {
    return value
        .toLowerCase()
        .replace(/[`*_#:[\](){},.!?;"'/-]+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

export default function PromptShop({ initialCategory = 'all' }: PromptShopProps) {
    const [activeCategory, setActiveCategory] = useState(initialCategory);
    const [searchQuery, setSearchQuery] = useState('');
    const [gridCols, setGridCols] = useState<3 | 4>(3);
    const sortBy: 'saves' | 'successRate' | 'tokensUsed' = 'saves';
    const deferredSearchQuery = useDeferredValue(searchQuery);
    const { t } = useI18n();

    // Sync with parent when initialCategory changes
    useEffect(() => {
        setActiveCategory(initialCategory);
    }, [initialCategory]);

    const searchTerms = normalizeSearchText(deferredSearchQuery)
        .split(' ')
        .filter(Boolean);

    const filteredProducts = promptProducts
        .filter((product) => {
            if (activeCategory !== 'all' && product.category !== activeCategory) {
                return false;
            }

            if (searchTerms.length === 0) {
                return true;
            }

            const searchableContent = normalizeSearchText([
                product.title,
                product.titleTr,
                product.titleDe,
                product.preview,
                product.previewTr,
                product.previewDe,
                product.fullPrompt,
                product.whyItWorks,
                product.tags.join(' '),
                product.category,
            ].filter(Boolean).join(' '));

            return searchTerms.every(term => searchableContent.includes(term));
        })
        .sort((a, b) => {
            if (sortBy === 'saves') return b.saves - a.saves;
            if (sortBy === 'successRate') return b.successRate - a.successRate;
            return a.tokensUsed - b.tokensUsed;
        });

    return (
        <div className={styles.shop}>
            {/* Category Filter Bar */}
            <div className={styles.filterBar}>
                <div className={styles.categories}>
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            className={`${styles.categoryBtn} ${activeCategory === cat.id ? styles.active : ''}`}
                            onClick={() => setActiveCategory(cat.id)}
                        >
                            <Icon icon={cat.icon} className={styles.categoryIcon} />
                            <span className={styles.categoryLabel}>{t(`categories.${cat.id}`)}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Results count */}
            <div className={styles.resultsBar}>
                <div className={styles.searchGroup}>
                    <label htmlFor="prompt-search" className={styles.searchLabel}>
                        {t('promptShop.searchLabel') || 'Search prompts'}
                    </label>
                    <div className={styles.searchInputWrap}>
                        <Icon icon="mingcute:search-line" className={styles.searchIcon} />
                        <input
                            id="prompt-search"
                            name="prompt-search"
                            type="search"
                            value={searchQuery}
                            onChange={(event) => setSearchQuery(event.target.value)}
                            className={styles.searchInput}
                            placeholder={t('promptShop.searchPlaceholder') || 'Search titles, definitions, tags, and full prompts'}
                            autoComplete="off"
                            spellCheck={false}
                            aria-describedby="prompt-search-results"
                        />
                        {searchQuery && (
                            <button
                                type="button"
                                className={styles.clearSearchBtn}
                                onClick={() => setSearchQuery('')}
                                aria-label={t('promptShop.clearSearch') || 'Clear search'}
                            >
                                <Icon icon="mingcute:close-line" />
                            </button>
                        )}
                    </div>
                </div>
                <span id="prompt-search-results" className={styles.resultsCount}>
                    {filteredProducts.length} {t('promptShop.found')}
                    {searchTerms.length > 0 ? ` · "${searchQuery.trim()}"` : ''}
                </span>
                <div className={styles.viewToggle}>
                    <span className={styles.viewLabel}>{t('promptShop.view') || 'VIEW'}</span>
                    {[3, 4].map((cols) => (
                        <button
                            key={cols}
                            className={`${styles.viewBtn} ${gridCols === cols ? styles.viewBtnActive : ''}`}
                            onClick={() => setGridCols(cols as 3 | 4)}
                        >
                            {cols}
                        </button>
                    ))}
                </div>
            </div>

            {/* Product Grid */}
            <div
                className={styles.productGrid}
                style={{ gridTemplateColumns: `repeat(${gridCols}, 1fr)` }}
            >
                {filteredProducts.map((prompt) => (
                    <PromptProductCard key={prompt.id} prompt={prompt} />
                ))}
            </div>

            {filteredProducts.length === 0 && (
                <div className={styles.emptyState}>
                    <p className={styles.emptyTitle}>{t('promptShop.noResultsTitle') || 'No prompts matched that search'}</p>
                    <p className={styles.emptyText}>
                        {t('promptShop.noResultsText') || 'Try a broader word, remove one term, or switch categories.'}
                    </p>
                </div>
            )}

            {/* Load More Removed per optimization request */}
        </div>
    );
}
