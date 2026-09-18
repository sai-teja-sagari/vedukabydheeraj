// Portfolio data source.
//
// To add a new shoot to the portfolio, add an entry to `photos` below —
// do NOT edit PortfolioPage.jsx. The grid, filters, and lightbox are all
// driven by this file: layout code never needs to change when new photos
// are added, only this array (and `categories`, if a whole new category
// is introduced).
//
// Each photo needs a unique `id` (used as the React key and, combined with
// the active filter, to drive the grid's fade-in animation), a real `src`
// import, real/specific `alt` text (also how these photos get discovered
// in image search — never generic placeholder text), a `category` that
// matches one of the `categories` keys below, a short italic `caption`,
// and the `couple` it belongs to.

import redDressBeach from '../Images/highlights/01_red_dress_beach.png';
import preWeddingSplash from '../Images/highlights/02_pre_wedding_splash.png';
import danceDip from '../Images/highlights/03_dance_dip.png';
import fallingInLove from '../Images/highlights/04_falling_in_love.png';
import bwWatercolorKick from '../Images/highlights/05_bw_watercolor_kick.png';
import templeMaternity from '../Images/highlights/06_temple_maternity.png';
import horseBeach from '../Images/highlights/07_horse_beach.png';
import blackSuitCouple from '../Images/highlights/08_black_suit_couple.png';
import maternityCollagePalace from '../Images/highlights/09_maternity_collage_palace.png';
import maternityCollageMomsToBe from '../Images/highlights/10_maternity_collage_momstobe.png';
import familyPullAlbum from '../Images/highlights/11_family_pull_album.png';
import templeSilhouetteMaternity from '../Images/highlights/12_temple_silhouette_maternity.jpg';
import veilCheekKiss from '../Images/highlights/13_veil_cheek_kiss.jpg';
import leafHalfFaceBridal from '../Images/highlights/14_leaf_half_face_bridal.jpg';
import bridalPortraitPoster from '../Images/highlights/15_bridal_portrait_poster.png';
import preweddingGardenLift from '../Images/highlights/16_prewedding_garden_lift.png';
import marriageCeremonyCollage from '../Images/highlights/17_marriage_ceremony_collage.png';
import weddingDipTitle from '../Images/highlights/18_wedding_dip_title.png';
import preweddingBikeForest from '../Images/highlights/19_prewedding_bike_forest.png';
import engagementCafeHearts from '../Images/highlights/20_engagement_cafe_hearts.png';
import engagementTempleSteps from '../Images/highlights/21_engagement_temple_steps.png';
import maternityOrangeSareePillars from '../Images/highlights/22_maternity_orange_saree_pillars.png';
import maternityLapRest from '../Images/highlights/23_maternity_lap_rest.png';
import maternityBwSilhouette from '../Images/highlights/24_maternity_bw_silhouette.png';
import maternityMarigoldField from '../Images/highlights/25_maternity_marigold_field.png';
import maternityFloralSwingRuins from '../Images/highlights/26_maternity_floral_swing_ruins.png';
import maternityRuinsAlcoveLaugh from '../Images/highlights/27_maternity_ruins_alcove_laugh.png';
import maternityForeheadKissCorridor from '../Images/highlights/28_maternity_forehead_kiss_corridor.png';
import maternityRuinsCollage from '../Images/highlights/29_maternity_ruins_collage.png';
import maternityMarigoldSwingSolo from '../Images/highlights/30_maternity_marigold_swing_solo.png';
import maternityMarigoldFieldSolo from '../Images/highlights/31_maternity_marigold_field_solo.png';
import maternityReadingTogetherRuins from '../Images/highlights/32_maternity_reading_together_ruins.png';
import preweddingSareeTwirl from '../Images/highlights/33_prewedding_saree_twirl.png';
import weddingRiceShowerBride from '../Images/highlights/34_wedding_rice_shower_bride.png';
import weddingMomentsRiceToss from '../Images/highlights/35_wedding_moments_rice_toss.png';
import weddingMomentsKalasham from '../Images/highlights/36_wedding_moments_kalasham.png';
import mehndiBridePortrait from '../Images/highlights/37_mehndi_bride_portrait.png';
import weddingBookCoverRings from '../Images/highlights/38_wedding_book_cover_rings.png';
import ringMomentCloseup from '../Images/highlights/39_ring_moment_closeup.png';
import receptionCheekKiss from '../Images/highlights/40_reception_cheek_kiss.png';
import bridalBranchTouchPortrait from '../Images/highlights/41_bridal_branch_touch_portrait.png';
import bridalMehndiHandsCollage from '../Images/highlights/42_bridal_mehndi_hands_collage.png';
import floralMandapColorSmokeWedding from '../Images/highlights/43_floral_mandap_color_smoke_wedding.png';
import haldiBrideLeafPortrait from '../Images/highlights/44_haldi_bride_leaf_portrait.png';
import receptionStageDecorCollage from '../Images/highlights/45_reception_stage_decor_collage.png';
import familyColorSplashPortrait from '../Images/highlights/46_family_color_splash_portrait.png';
import colorSplashCelebrationCollage from '../Images/highlights/47_color_splash_celebration_collage.png';

export const categories = [
  { key: 'all', label: 'All Work' },
  { key: 'weddings', label: 'Weddings' },
  { key: 'pre-wedding', label: 'Pre-Wedding' },
  { key: 'maternity', label: 'Maternity' },
  { key: 'engagement', label: 'Engagement' },
];

export const photos = [
  {
    id: 'dance-dip-01',
    src: danceDip,
    alt: 'Groom in a turban dipping his bride mid-dance in front of a floral wall at the wedding reception',
    category: 'weddings',
    caption: 'we look cute together',
    couple: 'Sirish & Tejaswini',
  },
  {
    id: 'black-suit-couple-01',
    src: blackSuitCouple,
    alt: 'Couple in elegant black formalwear sharing a quiet look beneath the palms at their reception',
    category: 'weddings',
    caption: 'forever, almost',
    couple: 'Sirish & Tejaswini',
  },
  {
    id: 'red-dress-beach-01',
    src: redDressBeach,
    alt: "Bride and groom on the beach at dusk, her red gown trailing in the wind",
    category: 'pre-wedding',
    caption: 'the wind caught her dress',
    couple: 'Sirish & Tejaswini',
  },
  {
    id: 'pre-wedding-splash-01',
    src: preWeddingSplash,
    alt: 'Groom lifting his bride as a wave breaks behind them on a rocky shore, styled as a "Pre Wedding" title card',
    category: 'pre-wedding',
    caption: 'caught by the wave',
    couple: 'Sirish & Tejaswini',
  },
  {
    id: 'falling-in-love-01',
    src: fallingInLove,
    alt: 'Aerial view of the couple lying together on dark ocean rocks, styled as a "Falling in Love" poster',
    category: 'pre-wedding',
    caption: 'falling in love',
    couple: 'Sirish & Tejaswini',
  },
  {
    id: 'horse-beach-01',
    src: horseBeach,
    alt: 'Couple walking a horse along the shoreline on a sunlit beach',
    category: 'pre-wedding',
    caption: 'wanderlust',
    couple: 'Sirish & Tejaswini',
  },
  {
    id: 'temple-maternity-01',
    src: templeMaternity,
    alt: 'Expecting couple standing before a heritage temple gopuram, she in a red silk saree',
    category: 'maternity',
    caption: 'blessed',
    couple: 'Sirish & Tejaswini',
  },
  {
    id: 'maternity-collage-palace-01',
    src: maternityCollagePalace,
    alt: 'Pregnancy announcement collage of the couple in front of a domed heritage building with the Indian flag',
    category: 'maternity',
    caption: 'the announcement',
    couple: 'Sirish & Tejaswini',
  },
  {
    id: 'maternity-collage-momstobe-01',
    src: maternityCollageMomsToBe,
    alt: 'Maternity collage of the mom-to-be forming a heart over her baby bump, branded "Moms & to Be"',
    category: 'maternity',
    caption: 'moms to be',
    couple: 'Sirish & Tejaswini',
  },
  {
    id: 'bw-watercolor-kick-01',
    src: bwWatercolorKick,
    alt: 'Bride-to-be kicking up a heel mid-laugh while her partner holds her close, in a black-and-white watercolor keepsake',
    category: 'engagement',
    caption: 'just us',
    couple: 'Sirish & Tejaswini',
  },
  {
    id: 'family-pull-album-01',
    src: familyPullAlbum,
    alt: 'Bride and groom pulled together by laughing family members in a tug-of-war wedding game, framed as a "Bride & Groom" album page',
    category: 'weddings',
    caption: 'pulled together',
    couple: 'Sirish & Tejaswini',
  },
  {
    id: 'veil-cheek-kiss-01',
    src: veilCheekKiss,
    alt: "Bride in a lace veil kissing the groom's cheek as he smiles, surrounded by soft greenery",
    category: 'weddings',
    caption: 'sealed with a kiss',
    couple: 'Sirish & Tejaswini',
  },
  {
    id: 'leaf-half-face-bridal-01',
    src: leafHalfFaceBridal,
    alt: 'Bride in gold temple jewelry peeking out from behind a large leaf, half her face in a smiling close-up',
    category: 'weddings',
    caption: 'peekaboo',
    couple: 'Sirish & Tejaswini',
  },
  {
    id: 'bridal-portrait-poster-01',
    src: bridalPortraitPoster,
    alt: "Bride's close-up portrait framed by watercolor leaves on a wedding album page for Sirish & Tejaswini",
    category: 'weddings',
    caption: 'the bride',
    couple: 'Sirish & Tejaswini',
  },
  {
    id: 'marriage-ceremony-collage-01',
    src: marriageCeremonyCollage,
    alt: "Marriage ceremony collage of the bride in a red-and-white silk saree, the groom's hands, and bridal makeup essentials",
    category: 'weddings',
    caption: 'getting ready',
    couple: 'Sirish & Tejaswini',
  },
  {
    id: 'wedding-dip-title-01',
    src: weddingDipTitle,
    alt: 'Groom dipping his bride under a canopy of trees, styled as a "Wedding, Sirish-Tejaswini, 17th Dec 2023" title card',
    category: 'weddings',
    caption: '17th of december',
    couple: 'Sirish & Tejaswini',
  },
  {
    id: 'wedding-rice-shower-bride-01',
    src: weddingRiceShowerBride,
    alt: 'Bride and groom showering each other with colorful confetti and rice grains during their wedding ceremony',
    category: 'weddings',
    caption: 'shower of joy',
    couple: 'Wedding Moments',
  },
  {
    id: 'wedding-moments-rice-toss-01',
    src: weddingMomentsRiceToss,
    alt: 'Groom and bride exchanging rice grains over a ceremonial vessel, styled as a "Wedding Moments" album page',
    category: 'weddings',
    caption: 'wedding moments',
    couple: 'Wedding Moments',
  },
  {
    id: 'wedding-moments-kalasham-01',
    src: weddingMomentsKalasham,
    alt: 'Bride and groom seated before a ceremonial copper kalasham pot during their traditional wedding rites',
    category: 'weddings',
    caption: 'sacred rites',
    couple: 'Wedding Moments',
  },
  {
    id: 'mehndi-bride-portrait-01',
    src: mehndiBridePortrait,
    alt: 'Close-up of a smiling bride with intricate mehndi on her hands and jasmine garlands around her neck',
    category: 'weddings',
    caption: 'hands full of henna',
    couple: 'Wedding Moments',
  },
  {
    id: 'prewedding-garden-lift-01',
    src: preweddingGardenLift,
    alt: 'Groom in a turban lifting his bride off her feet on a palm-lined garden path during their pre-wedding shoot',
    category: 'pre-wedding',
    caption: 'swept off her feet',
    couple: 'Sirish & Tejaswini',
  },
  {
    id: 'prewedding-bike-forest-01',
    src: preweddingBikeForest,
    alt: 'Couple riding a motorcycle through a misty forest, her blue ruffled gown catching the wind',
    category: 'pre-wedding',
    caption: 'a smile is the best makeup',
    couple: 'Sirish & Tejaswini',
  },
  {
    id: 'prewedding-saree-twirl-01',
    src: preweddingSareeTwirl,
    alt: 'Bride twirling the pallu of her cream and red silk saree, smiling beneath a canopy of palm trees',
    category: 'pre-wedding',
    caption: 'twirl and smile',
    couple: 'Sirish & Tejaswini',
  },
  {
    id: 'temple-silhouette-maternity-01',
    src: templeSilhouetteMaternity,
    alt: 'Silhouette of an expecting mother cradling her bump in an archway at sunset, a heritage temple gopuram glowing behind her',
    category: 'maternity',
    caption: 'golden hour',
    couple: 'Sirish & Tejaswini',
  },
  {
    id: 'maternity-orange-saree-pillars-01',
    src: maternityOrangeSareePillars,
    alt: 'Expecting mother in an orange silk saree cradling her bump beneath the pillars of a traditional heritage home',
    category: 'maternity',
    caption: 'waiting for you',
    couple: 'Sirish & Tejaswini',
  },
  {
    id: 'maternity-lap-rest-01',
    src: maternityLapRest,
    alt: "Expecting mother resting her husband's head against her bump as he looks up at her lovingly",
    category: 'maternity',
    caption: 'resting close',
    couple: 'Sirish & Tejaswini',
  },
  {
    id: 'maternity-bw-silhouette-01',
    src: maternityBwSilhouette,
    alt: 'Black-and-white portrait of an expecting mother in a flowing gown with her silhouette cast on the wall beside her',
    category: 'maternity',
    caption: 'two shadows now',
    couple: 'Sirish & Tejaswini',
  },
  {
    id: 'maternity-marigold-field-01',
    src: maternityMarigoldField,
    alt: "Groom kneeling to kiss his wife's baby bump amid a marigold field at sunset, a temple gopuram in the distance",
    category: 'maternity',
    caption: 'blessed with love',
    couple: 'Sirish & Tejaswini',
  },
  {
    id: 'maternity-floral-swing-ruins-01',
    src: maternityFloralSwingRuins,
    alt: 'Expecting couple beside a marigold-decked swing with a misty hillside temple backdrop',
    category: 'maternity',
    caption: 'swing season',
    couple: 'Sirish & Tejaswini',
  },
  {
    id: 'maternity-ruins-alcove-laugh-01',
    src: maternityRuinsAlcoveLaugh,
    alt: "Expecting couple sharing a laugh tucked into a stone alcove of a heritage ruin, her hand resting on her bump",
    category: 'maternity',
    caption: "can't stop laughing",
    couple: 'Sirish & Tejaswini',
  },
  {
    id: 'maternity-forehead-kiss-corridor-01',
    src: maternityForeheadKissCorridor,
    alt: "Expecting mother placing a gentle kiss on her husband's forehead in a sunlit stone corridor",
    category: 'maternity',
    caption: 'forehead kisses',
    couple: 'Sirish & Tejaswini',
  },
  {
    id: 'maternity-ruins-collage-01',
    src: maternityRuinsCollage,
    alt: 'Collage of an expecting couple walking and embracing through the pillared corridors of a heritage ruin',
    category: 'maternity',
    caption: 'wandering together',
    couple: 'Sirish & Tejaswini',
  },
  {
    id: 'maternity-marigold-swing-solo-01',
    src: maternityMarigoldSwingSolo,
    alt: 'Expecting mother in a pink silk saree seated on a marigold-decorated swing with a temple gopuram behind her',
    category: 'maternity',
    caption: 'swaying gently',
    couple: 'Sirish & Tejaswini',
  },
  {
    id: 'maternity-marigold-field-solo-01',
    src: maternityMarigoldFieldSolo,
    alt: 'Expecting mother standing among marigold flowers in a pink saree under a dramatic sunset sky',
    category: 'maternity',
    caption: 'glowing',
    couple: 'Sirish & Tejaswini',
  },
  {
    id: 'maternity-reading-together-ruins-01',
    src: maternityReadingTogetherRuins,
    alt: 'Husband reading a storybook aloud to his wife as she rests her head in his lap on a heritage stone wall',
    category: 'maternity',
    caption: 'reading to you already',
    couple: 'Sirish & Tejaswini',
  },
  {
    id: 'engagement-cafe-hearts-01',
    src: engagementCafeHearts,
    alt: 'Collage of a couple\'s cafe date with latte-art hearts and candid laughs, branded "AMSA - Amrutha Saikiran"',
    category: 'engagement',
    caption: 'our little dates',
    couple: 'Amrutha & Saikiran',
  },
  {
    id: 'engagement-temple-steps-01',
    src: engagementTempleSteps,
    alt: 'Couple sitting together on ancient stone steps, sharing a quiet laugh in casual traditional wear',
    category: 'engagement',
    caption: 'just talking',
    couple: 'Amrutha & Saikiran',
  },
  {
    id: 'wedding-book-cover-rings-01',
    src: weddingBookCoverRings,
    alt: 'Black-and-white "My Moment: The Wedding Book" cover of the couple gazing at each other while showing off their rings, her mehndi-covered hand raised between them',
    category: 'weddings',
    caption: 'my moment',
    couple: 'Sirish & Tejaswini',
  },
  {
    id: 'ring-moment-closeup-01',
    src: ringMomentCloseup,
    alt: 'Groom in a lavender turban and his bride sharing a quiet, close look at night, her mehndi-covered hand raised with their rings',
    category: 'weddings',
    caption: 'promised forever',
    couple: 'Sirish & Tejaswini',
  },
  {
    id: 'reception-cheek-kiss-01',
    src: receptionCheekKiss,
    alt: 'Bride in a shimmering lavender gown kissing her groom on the cheek in front of a flower wall at their reception',
    category: 'weddings',
    caption: 'reception glow',
    couple: 'Sirish & Tejaswini',
  },
  {
    id: 'bridal-branch-touch-portrait-01',
    src: bridalBranchTouchPortrait,
    alt: 'Bride in a red and silver embroidered lehenga smiling softly while reaching for tree leaves, her mehndi-covered hand raised',
    category: 'weddings',
    caption: 'amid the leaves',
    couple: 'Wedding Moments',
  },
  {
    id: 'bridal-mehndi-hands-collage-01',
    src: bridalMehndiHandsCollage,
    alt: 'Collage of a bride in bridal red showing off intricate mehndi patterns on both hands raised near her face',
    category: 'weddings',
    caption: 'written in henna',
    couple: 'Wedding Moments',
  },
  {
    id: 'floral-mandap-color-smoke-wedding-01',
    src: floralMandapColorSmokeWedding,
    alt: 'Bride and groom exchanging vows under a flower-covered mandap as a burst of colorful smoke rises behind them',
    category: 'weddings',
    caption: 'colors of forever',
    couple: 'Wedding Moments',
  },
  {
    id: 'haldi-bride-leaf-portrait-01',
    src: haldiBrideLeafPortrait,
    alt: 'Bride in a yellow Haldi outfit with floral jewelry smiling softly from behind a large green leaf',
    category: 'weddings',
    caption: 'shy smiles',
    couple: 'Wedding Moments',
  },
  {
    id: 'reception-stage-decor-collage-01',
    src: receptionStageDecorCollage,
    alt: 'Reception stage decor collage with a floral backdrop, decorated entrance archway, and a welcome signboard for Srikanth & Niiisha',
    category: 'weddings',
    caption: 'set the stage',
    couple: 'Srikanth & Niiisha',
  },
  {
    id: 'family-color-splash-portrait-01',
    src: familyColorSplashPortrait,
    alt: 'Family of four in matching paint-splashed cream outfits and sunglasses posing together at a wedding color celebration',
    category: 'weddings',
    caption: 'family first',
    couple: 'Wedding Moments',
  },
  {
    id: 'color-splash-celebration-collage-01',
    src: colorSplashCelebrationCollage,
    alt: 'Collage of guests in paint-splashed outfits and sunglasses celebrating together at a wedding color party',
    category: 'weddings',
    caption: 'splashed with joy',
    couple: 'Wedding Moments',
  },
];
