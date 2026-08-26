import React from 'react';
import { PRICING_TIERS, PricingTier } from '@/config/pricing';

interface TierBadgeProps {
  tierId: 'platinum' | 'gold' | 'silver';
  showDetails?: boolean;
}

export const TierBadge: React.FC<TierBadgeProps> = ({ tierId, showDetails = false }) => {
  const tier = PRICING_TIERS.find((t) => t.id === tierId) || PRICING_TIERS[0];

  return (
    <div className="inline-flex flex-col">
      <span
        style={{
          backgroundColor: tier.badgeBg,
          color: tier.badgeTextColor,
        }}
        className="px-3 py-1 rounded-full font-heading font-semibold text-xs tracking-wider uppercase shadow-sm inline-flex items-center gap-1.5"
      >
        <span>
          {tier.id === 'platinum' && '✦'}
          {tier.id === 'gold' && '★'}
          {tier.id === 'silver' && '◆'}
        </span>
        <span>{tier.name}</span>
        <span className="opacity-80">· ₹{tier.perSessionPrice}/sess</span>
      </span>
      {showDetails && (
        <span className="text-[11px] text-neutral-grey mt-1 font-body">
          {tier.qualifications} ({tier.experience})
        </span>
      )}
    </div>
  );
};
