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

import redDressBeach from '../Images/highlights/01_red_dress_beach.jpg';
import preWeddingSplash from '../Images/highlights/02_pre_wedding_splash.jpg';
import danceDip from '../Images/highlights/03_dance_dip.jpg';
import fallingInLove from '../Images/highlights/04_falling_in_love.jpg';
import bwWatercolorKick from '../Images/highlights/05_bw_watercolor_kick.jpg';
import templeMaternity from '../Images/highlights/06_temple_maternity.jpg';
import horseBeach from '../Images/highlights/07_horse_beach.jpg';
import blackSuitCouple from '../Images/highlights/08_black_suit_couple.jpg';
import maternityCollagePalace from '../Images/highlights/09_maternity_collage_palace.jpg';
import maternityCollageMomsToBe from '../Images/highlights/10_maternity_collage_momstobe.jpg';
import familyPullAlbum from '../Images/highlights/11_family_pull_album.jpg';
import templeSilhouetteMaternity from '../Images/highlights/12_temple_silhouette_maternity.jpg';
import veilCheekKiss from '../Images/highlights/13_veil_cheek_kiss.jpg';
import leafHalfFaceBridal from '../Images/highlights/14_leaf_half_face_bridal.jpg';
import bridalPortraitPoster from '../Images/highlights/15_bridal_portrait_poster.jpg';
import preweddingGardenLift from '../Images/highlights/16_prewedding_garden_lift.jpg';
import marriageCeremonyCollage from '../Images/highlights/17_marriage_ceremony_collage.jpg';
import weddingDipTitle from '../Images/highlights/18_wedding_dip_title.jpg';
import preweddingBikeForest from '../Images/highlights/19_prewedding_bike_forest.jpg';
import engagementCafeHearts from '../Images/highlights/20_engagement_cafe_hearts.jpg';
import engagementTempleSteps from '../Images/highlights/21_engagement_temple_steps.jpg';
import maternityOrangeSareePillars from '../Images/highlights/22_maternity_orange_saree_pillars.jpg';
import maternityLapRest from '../Images/highlights/23_maternity_lap_rest.jpg';
import maternityBwSilhouette from '../Images/highlights/24_maternity_bw_silhouette.jpg';
import maternityMarigoldField from '../Images/highlights/25_maternity_marigold_field.jpg';
import maternityFloralSwingRuins from '../Images/highlights/26_maternity_floral_swing_ruins.jpg';
import maternityRuinsAlcoveLaugh from '../Images/highlights/27_maternity_ruins_alcove_laugh.jpg';
import maternityForeheadKissCorridor from '../Images/highlights/28_maternity_forehead_kiss_corridor.jpg';
import maternityRuinsCollage from '../Images/highlights/29_maternity_ruins_collage.jpg';
import maternityMarigoldSwingSolo from '../Images/highlights/30_maternity_marigold_swing_solo.jpg';
import maternityMarigoldFieldSolo from '../Images/highlights/31_maternity_marigold_field_solo.jpg';
import maternityReadingTogetherRuins from '../Images/highlights/32_maternity_reading_together_ruins.jpg';
import preweddingSareeTwirl from '../Images/highlights/33_prewedding_saree_twirl.jpg';
import weddingRiceShowerBride from '../Images/highlights/34_wedding_rice_shower_bride.jpg';
import weddingMomentsRiceToss from '../Images/highlights/35_wedding_moments_rice_toss.jpg';
import weddingMomentsKalasham from '../Images/highlights/36_wedding_moments_kalasham.jpg';
import mehndiBridePortrait from '../Images/highlights/37_mehndi_bride_portrait.jpg';
import weddingBookCoverRings from '../Images/highlights/38_wedding_book_cover_rings.jpg';
import ringMomentCloseup from '../Images/highlights/39_ring_moment_closeup.jpg';
import receptionCheekKiss from '../Images/highlights/40_reception_cheek_kiss.jpg';
import bridalBranchTouchPortrait from '../Images/highlights/41_bridal_branch_touch_portrait.jpg';
import bridalMehndiHandsCollage from '../Images/highlights/42_bridal_mehndi_hands_collage.jpg';
import floralMandapColorSmokeWedding from '../Images/highlights/43_floral_mandap_color_smoke_wedding.jpg';
import haldiBrideLeafPortrait from '../Images/highlights/44_haldi_bride_leaf_portrait.jpg';
import receptionStageDecorCollage from '../Images/highlights/45_reception_stage_decor_collage.jpg';
import familyColorSplashPortrait from '../Images/highlights/46_family_color_splash_portrait.jpg';
import colorSplashCelebrationCollage from '../Images/highlights/47_color_splash_celebration_collage.jpg';
import amruthaSaikiranWeddingPortrait from '../Images/highlights/48_amrutha_saikiran_wedding_portrait.png';
import amruthaSaikiranLook from '../Images/highlights/49_amrutha_saikiran_look.png';
import amsaPoster from '../Images/highlights/50_amsa_poster.png';
import bridePortraitFrame from '../Images/highlights/51_bride_portrait_frame.png';
import amberBridalPortrait from '../Images/highlights/52_amber_bridal_portrait.png';
import ringCeremony from '../Images/highlights/53_ring_ceremony.png';
import ringExchangeDetail from '../Images/highlights/54_ring_exchange_detail.png';
import moonlitEngagementPoster from '../Images/highlights/55_moonlit_engagement_poster.png';
import bridePortraitEngagement from '../Images/highlights/56_bride_portrait_engagement.png';
import iWillDoMyBestForYou from '../Images/highlights/57_i_will_do_my_best_for_you.png';

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
    couple: '',
  },
  {
    id: 'black-suit-couple-01',
    src: blackSuitCouple,
    alt: 'Couple in elegant black formalwear sharing a quiet look beneath the palms at their reception',
    category: 'weddings',
    caption: 'forever, almost',
    couple: '',
  },
  {
    id: 'red-dress-beach-01',
    src: redDressBeach,
    alt: "Bride and groom on the beach at dusk, her red gown trailing in the wind",
    category: 'pre-wedding',
    caption: 'the wind caught her dress',
    couple: '',
  },
  {
    id: 'pre-wedding-splash-01',
    src: preWeddingSplash,
    alt: 'Groom lifting his bride as a wave breaks behind them on a rocky shore, styled as a "Pre Wedding" title card',
    category: 'pre-wedding',
    caption: 'caught by the wave',
    couple: '',
  },
  {
    id: 'falling-in-love-01',
    src: fallingInLove,
    alt: 'Aerial view of the couple lying together on dark ocean rocks, styled as a "Falling in Love" poster',
    category: 'pre-wedding',
    caption: 'falling in love',
    couple: '',
  },
  {
    id: 'horse-beach-01',
    src: horseBeach,
    alt: 'Couple walking a horse along the shoreline on a sunlit beach',
    category: 'pre-wedding',
    caption: 'wanderlust',
    couple: '',
  },
  {
    id: 'temple-maternity-01',
    src: templeMaternity,
    alt: 'Expecting couple standing before a heritage temple gopuram, she in a red silk saree',
    category: 'maternity',
    caption: 'blessed',
    couple: '',
  },
  {
    id: 'maternity-collage-palace-01',
    src: maternityCollagePalace,
    alt: 'Pregnancy announcement collage of the couple in front of a domed heritage building with the Indian flag',
    category: 'maternity',
    caption: 'the announcement',
    couple: '',
  },
  {
    id: 'maternity-collage-momstobe-01',
    src: maternityCollageMomsToBe,
    alt: 'Maternity collage of the mom-to-be forming a heart over her baby bump, branded "Moms & to Be"',
    category: 'maternity',
    caption: 'moms to be',
    couple: '',
  },
  {
    id: 'bw-watercolor-kick-01',
    src: bwWatercolorKick,
    alt: 'Bride-to-be kicking up a heel mid-laugh while her partner holds her close, in a black-and-white watercolor keepsake',
    category: 'engagement',
    caption: 'just us',
    couple: '',
  },
  {
    id: 'family-pull-album-01',
    src: familyPullAlbum,
    alt: 'Bride and groom pulled together by laughing family members in a tug-of-war wedding game, framed as a "Bride & Groom" album page',
    category: 'weddings',
    caption: 'pulled together',
    couple: '',
  },
  {
    id: 'veil-cheek-kiss-01',
    src: veilCheekKiss,
    alt: "Bride in a lace veil kissing the groom's cheek as he smiles, surrounded by soft greenery",
    category: 'weddings',
    caption: 'sealed with a kiss',
    couple: '',
  },
  {
    id: 'leaf-half-face-bridal-01',
    src: leafHalfFaceBridal,
    alt: 'Bride in gold temple jewelry peeking out from behind a large leaf, half her face in a smiling close-up',
    category: 'weddings',
    caption: 'peekaboo',
    couple: '',
  },
  {
    id: 'bridal-portrait-poster-01',
    src: bridalPortraitPoster,
    alt: "Bride's close-up portrait framed by watercolor leaves on a wedding album page for ",
    category: 'weddings',
    caption: 'the bride',
    couple: '',
  },
  {
    id: 'marriage-ceremony-collage-01',
    src: marriageCeremonyCollage,
    alt: "Marriage ceremony collage of the bride in a red-and-white silk saree, the groom's hands, and bridal makeup essentials",
    category: 'weddings',
    caption: 'getting ready',
    couple: '',
  },
  {
    id: 'wedding-dip-title-01',
    src: weddingDipTitle,
    alt: 'Groom dipping his bride under a canopy of trees, styled as a "Wedding, , 17th Dec 2023" title card',
    category: 'weddings',
    caption: '17th of december',
    couple: '',
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
    couple: '',
  },
  {
    id: 'prewedding-bike-forest-01',
    src: preweddingBikeForest,
    alt: 'Couple riding a motorcycle through a misty forest, her blue ruffled gown catching the wind',
    category: 'pre-wedding',
    caption: 'a smile is the best makeup',
    couple: '',
  },
  {
    id: 'prewedding-saree-twirl-01',
    src: preweddingSareeTwirl,
    alt: 'Bride twirling the pallu of her cream and red silk saree, smiling beneath a canopy of palm trees',
    category: 'pre-wedding',
    caption: 'twirl and smile',
    couple: '',
  },
  {
    id: 'temple-silhouette-maternity-01',
    src: templeSilhouetteMaternity,
    alt: 'Silhouette of an expecting mother cradling her bump in an archway at sunset, a heritage temple gopuram glowing behind her',
    category: 'maternity',
    caption: 'golden hour',
    couple: '',
  },
  {
    id: 'maternity-orange-saree-pillars-01',
    src: maternityOrangeSareePillars,
    alt: 'Expecting mother in an orange silk saree cradling her bump beneath the pillars of a traditional heritage home',
    category: 'maternity',
    caption: 'waiting for you',
    couple: '',
  },
  {
    id: 'maternity-lap-rest-01',
    src: maternityLapRest,
    alt: "Expecting mother resting her husband's head against her bump as he looks up at her lovingly",
    category: 'maternity',
    caption: 'resting close',
    couple: '',
  },
  {
    id: 'maternity-bw-silhouette-01',
    src: maternityBwSilhouette,
    alt: 'Black-and-white portrait of an expecting mother in a flowing gown with her silhouette cast on the wall beside her',
    category: 'maternity',
    caption: 'two shadows now',
    couple: '',
  },
  {
    id: 'maternity-marigold-field-01',
    src: maternityMarigoldField,
    alt: "Groom kneeling to kiss his wife's baby bump amid a marigold field at sunset, a temple gopuram in the distance",
    category: 'maternity',
    caption: 'blessed with love',
    couple: '',
  },
  {
    id: 'maternity-floral-swing-ruins-01',
    src: maternityFloralSwingRuins,
    alt: 'Expecting couple beside a marigold-decked swing with a misty hillside temple backdrop',
    category: 'maternity',
    caption: 'swing season',
    couple: '',
  },
  {
    id: 'maternity-ruins-alcove-laugh-01',
    src: maternityRuinsAlcoveLaugh,
    alt: "Expecting couple sharing a laugh tucked into a stone alcove of a heritage ruin, her hand resting on her bump",
    category: 'maternity',
    caption: "can't stop laughing",
    couple: '',
  },
  {
    id: 'maternity-forehead-kiss-corridor-01',
    src: maternityForeheadKissCorridor,
    alt: "Expecting mother placing a gentle kiss on her husband's forehead in a sunlit stone corridor",
    category: 'maternity',
    caption: 'forehead kisses',
    couple: '',
  },
  {
    id: 'maternity-ruins-collage-01',
    src: maternityRuinsCollage,
    alt: 'Collage of an expecting couple walking and embracing through the pillared corridors of a heritage ruin',
    category: 'maternity',
    caption: 'wandering together',
    couple: '',
  },
  {
    id: 'maternity-marigold-swing-solo-01',
    src: maternityMarigoldSwingSolo,
    alt: 'Expecting mother in a pink silk saree seated on a marigold-decorated swing with a temple gopuram behind her',
    category: 'maternity',
    caption: 'swaying gently',
    couple: '',
  },
  {
    id: 'maternity-marigold-field-solo-01',
    src: maternityMarigoldFieldSolo,
    alt: 'Expecting mother standing among marigold flowers in a pink saree under a dramatic sunset sky',
    category: 'maternity',
    caption: 'glowing',
    couple: '',
  },
  {
    id: 'maternity-reading-together-ruins-01',
    src: maternityReadingTogetherRuins,
    alt: 'Husband reading a storybook aloud to his wife as she rests her head in his lap on a heritage stone wall',
    category: 'maternity',
    caption: 'reading to you already',
    couple: '',
  },
  {
    id: 'engagement-cafe-hearts-01',
    src: engagementCafeHearts,
    alt: 'Collage of a couple\'s cafe date with latte-art hearts and candid laughs, branded "AMSA - Amrutha Saikiran"',
    category: 'pre-wedding',
    caption: 'our little dates',
    couple: 'Amrutha & Saikiran',
  },
  {
    id: 'engagement-temple-steps-01',
    src: engagementTempleSteps,
    alt: 'Couple sitting together on ancient stone steps, sharing a quiet laugh in casual traditional wear',
    category: 'pre-wedding',
    caption: 'just talking',
    couple: 'Amrutha & Saikiran',
  },
  {
    id: 'wedding-book-cover-rings-01',
    src: weddingBookCoverRings,
    alt: 'Black-and-white "My Moment: The Wedding Book" cover of the couple gazing at each other while showing off their rings, her mehndi-covered hand raised between them',
    category: 'weddings',
    caption: 'my moment',
    couple: '',
  },
  {
    id: 'ring-moment-closeup-01',
    src: ringMomentCloseup,
    alt: 'Groom in a lavender turban and his bride sharing a quiet, close look at night, her mehndi-covered hand raised with their rings',
    category: 'weddings',
    caption: 'promised forever',
    couple: '',
  },
  {
    id: 'reception-cheek-kiss-01',
    src: receptionCheekKiss,
    alt: 'Bride in a shimmering lavender gown kissing her groom on the cheek in front of a flower wall at their reception',
    category: 'weddings',
    caption: 'reception glow',
    couple: '',
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
  {
    id: 'amrutha-saikiran-wedding-portrait-01',
    src: amruthaSaikiranWeddingPortrait,
    alt: 'Portrait of Amrutha and Saikiran standing together in traditional bridal attire against a soft warm background',
    category: 'weddings',
    caption: 'amrutha & saikiran',
    couple: 'Amrutha & Saikiran',
  },
  {
    id: 'amrutha-saikiran-look-01',
    src: amruthaSaikiranLook,
    alt: 'Close bridal portrait of the couple facing each other with warm golden lighting and festive traditional outfits',
    category: 'weddings',
    caption: 'just looking at each other',
    couple: 'Amrutha & Saikiran',
  },
  {
    id: 'amsa-poster-01',
    src: amsaPoster,
    alt: 'AMSA poster-style portrait of the bride in traditional jewellery with a dreamy floral and forest overlay',
    category: 'weddings',
    caption: 'amsa',
    couple: 'Amrutha & Saikiran',
  },
  {
    id: 'bride-portrait-frame-01',
    src: bridePortraitFrame,
    alt: 'Bride portrait framed in a white panel with warm sunset colours and clean editorial styling',
    category: 'weddings',
    caption: 'bride in bloom',
    couple: 'Amrutha & Saikiran',
  },
  {
    id: 'amber-bridal-portrait-01',
    src: amberBridalPortrait,
    alt: 'Close-up bridal portrait with traditional jewellery, soft beige backdrop, and elegant bridal styling',
    category: 'weddings',
    caption: 'amber glow',
    couple: 'Amrutha & Saikiran',
  },  {
    id: 'ring-ceremony-01',
    src: ringCeremony,
    alt: 'Couple exchanging rings during a decorated engagement ceremony with floral garlands and warm golden light',
    category: 'engagement',
    caption: 'ring ceremony',
    couple: 'Amrutha & Saikiran',
  },
  {
    id: 'ring-exchange-detail-01',
    src: ringExchangeDetail,
    alt: 'Close detail of the couple exchanging rings during the engagement, with henna-decorated hands and bracelets',
    category: 'engagement',
    caption: 'promise in a ring',
    couple: 'Amrutha & Saikiran',
  },
  {
    id: 'moonlit-engagement-poster-01',
    src: moonlitEngagementPoster,
    alt: 'Moonlit engagement poster of the bride in traditional attire, framed with a glowing moon and temple silhouette',
    category: 'engagement',
    caption: 'engagement moments',
    couple: 'Amrutha & Saikiran',
  },
  {
    id: 'bride-portrait-engagement-01',
    src: bridePortraitEngagement,
    alt: 'Bride smiling in her traditional saree during a moody engagement portrait with floral ornaments and dramatic lighting',
    category: 'engagement',
    caption: 'bride in bloom',
    couple: 'Amrutha & Saikiran',
  },
  {
    id: 'i-will-do-my-best-for-you-01',
    src: iWillDoMyBestForYou,
    alt: 'Stylized engagement portrait of the couple standing together in a pastel-toned backdrop with bold typography',
    category: 'engagement',
    caption: 'for you',
    couple: 'Amrutha & Saikiran',
  },];
