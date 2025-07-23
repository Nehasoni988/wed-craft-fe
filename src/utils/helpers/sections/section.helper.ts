import { weddingConfig } from "../../../config/wedding.config";

export const isEventsSectionEnabled = weddingConfig.sections.events.enable
export const isLocationsSectionEnabled = weddingConfig.sections.locations.enable
export const isHighlightsSectionEnabled = weddingConfig.sections.highlights.enable
export const isPersonalVowSectionEnabled = weddingConfig.sections.highlights.enable && weddingConfig.sections.highlights.personalVows.enable
export const isHighlightsVideoSectionEnabled = weddingConfig.sections.highlights.enable && weddingConfig.sections.highlights.videos.enable
