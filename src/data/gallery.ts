/* ============================================================================
 * PHOTO GALLERY DATA — HOW TO MANAGE IMAGES YOURSELF
 * ============================================================================
 *
 * This file is the single source of truth for the photo library shown on the
 * Media page. Every image that appears in the gallery must be listed here.
 *
 * HOW IT WORKS
 * ------------
 * 1. Drop your image file into the matching folder under `public/media/...`
 *    (e.g. `public/media/field/`, `public/media/gaza-food/`, etc.).
 * 2. Add ONE line for it in the `gallery` array below, in the correct group.
 * 3. The image path must start with `/media/...` (the leading slash matters).
 *
 * THE THREE FIELDS PER IMAGE
 * --------------------------
 *   src    -> the file path, e.g. "/media/field/my-photo.jpg"
 *   group  -> which filter tab it belongs to (must match a `key` below)
 *   region -> the caption shown in the lightbox ("Pakistan" or "Gaza")
 *
 * FILTER TABS (the buttons at the top of the gallery)
 * --------------------------------------------------
 * The `galleryGroups` array below defines the filter tabs. Each tab has:
 *   key    -> the internal id used in the `group` field of every image
 *   label  -> the text shown on the tab button
 *   region -> the region caption shown in the lightbox
 *
 * To ADD a new filter tab: add an object here, then tag images with its `key`.
 * To RENAME a tab: change `label` here (image `group` values stay the same).
 * To REMOVE a tab: delete its object here AND remove/retag its images.
 *
 * TIP — keep each group's images grouped together in the array below so the
 * gallery reads cleanly. The order in this array is the order they display.
 * ========================================================================== */

export type GalleryItem = { src: string; group: string; region: string };

/* ---------------------------------------------------------------------------
 * FILTER TABS — edit the labels here to rename the buttons on the page.
 * The `key` values must match the `group` field used on each image below.
 * ------------------------------------------------------------------------- */
export const galleryGroups = [
  { key: "field", label: "MMM Academy & Surgical Camps", region: "Pakistan" },
  { key: "disaster", label: "Pakistan flood response", region: "Pakistan" },
  { key: "medical", label: "Gaza field clinics", region: "Gaza" },
  { key: "ration", label: "Gaza food parcels", region: "Gaza" },
  { key: "gaza-food", label: "Hot meals and parcels", region: "Gaza" },
  { key: "gaza-water", label: "Water for Life", region: "Gaza" },
  { key: "gaza-winter", label: "Winter packages", region: "Gaza" },
] as const;

/* ---------------------------------------------------------------------------
 * THE IMAGE LIST — add/remove/retag images here.
 *
 * Each line is one photograph. To add an image, copy a line and change the
 * `src` path (and `group`/`region` if needed). To remove one, delete its line.
 *
 * The groups below are separated by comment banners so you can find the right
 * section quickly. Keep new images inside the correct group's block.
 * ------------------------------------------------------------------------- */

export const gallery: GalleryItem[] = [
  /* ---- GROUP: field (MMM Academy & Surgical Camps, Pakistan) ---- */
  { src: "/media/field/bls-rescue-1122.jpg", group: "field", region: "Pakistan" },
  { src: "/media/field/surgical-camp-kotlakhpat.jpg", group: "field", region: "Pakistan" },
  { src: "/media/field/surgical-camp-rajanpur.jpg", group: "field", region: "Pakistan" },
  { src: "/media/field/free-medical-camp-doctors.jpg", group: "field", region: "Pakistan" },
  { src: "/media/field/free-medical-camp-medicines.jpg", group: "field", region: "Pakistan" },
  { src: "/media/field/free-medical-camp-queue.jpg", group: "field", region: "Pakistan" },
  { src: "/media/field/cme-medical-symposium.jpg", group: "field", region: "Pakistan" },
  { src: "/media/field/national-conference-stage.jpg", group: "field", region: "Pakistan" },
  { src: "/media/field/national-conference-audience.jpg", group: "field", region: "Pakistan" },
  { src: "/media/field/conference-awards-ceremony.jpg", group: "field", region: "Pakistan" },
  { src: "/media/field/future-healers-mentorship.jpg", group: "field", region: "Pakistan" },
  { src: "/media/field/first-aid-workshop-table.jpg", group: "field", region: "Pakistan" },
  { src: "/media/field/hero-humanitarian-relief.jpg", group: "field", region: "Pakistan" },
  { src: "/media/field/hero-disaster-response.jpg", group: "field", region: "Pakistan" },
  { src: "/media/field/hero-national-conference.jpg", group: "field", region: "Pakistan" },

  /* ---- GROUP: disaster (Pakistan flood response) ---- */
  { src: "/media/disaster/disaster-01.jpg", group: "disaster", region: "Pakistan" },
  { src: "/media/disaster/disaster-02.jpg", group: "disaster", region: "Pakistan" },
  { src: "/media/disaster/disaster-03.jpg", group: "disaster", region: "Pakistan" },
  { src: "/media/disaster/disaster-04.jpg", group: "disaster", region: "Pakistan" },
  { src: "/media/disaster/disaster-05.jpg", group: "disaster", region: "Pakistan" },
  { src: "/media/disaster/disaster-06.jpg", group: "disaster", region: "Pakistan" },
  { src: "/media/disaster/disaster-07.jpg", group: "disaster", region: "Pakistan" },
  { src: "/media/disaster/disaster-08.jpg", group: "disaster", region: "Pakistan" },
  { src: "/media/disaster/disaster-09.jpg", group: "disaster", region: "Pakistan" },
  { src: "/media/disaster/disaster-10.jpg", group: "disaster", region: "Pakistan" },
  { src: "/media/disaster/disaster-11.jpg", group: "disaster", region: "Pakistan" },
  { src: "/media/disaster/disaster-12.jpg", group: "disaster", region: "Pakistan" },
  { src: "/media/disaster/disaster-13.jpg", group: "disaster", region: "Pakistan" },
  { src: "/media/disaster/disaster-14.jpg", group: "disaster", region: "Pakistan" },
  { src: "/media/disaster/disaster-15.jpeg", group: "disaster", region: "Pakistan" },

  /* ---- GROUP: medical (Gaza field clinics) ---- */
  { src: "/media/medical/medical-01.jpg", group: "medical", region: "Gaza" },
  { src: "/media/medical/medical-02.jpg", group: "medical", region: "Gaza" },
  { src: "/media/medical/medical-03.jpg", group: "medical", region: "Gaza" },
  { src: "/media/medical/medical-04.jpg", group: "medical", region: "Gaza" },
  { src: "/media/medical/medical-05.jpg", group: "medical", region: "Gaza" },
  { src: "/media/medical/medical-06.jpg", group: "medical", region: "Gaza" },
  { src: "/media/medical/medical-07.jpg", group: "medical", region: "Gaza" },
  { src: "/media/medical/medical-08.jpg", group: "medical", region: "Gaza" },
  { src: "/media/medical/medical-09.jpg", group: "medical", region: "Gaza" },
  { src: "/media/medical/medical-10.jpg", group: "medical", region: "Gaza" },
  { src: "/media/medical/medical-11.jpg", group: "medical", region: "Gaza" },
  { src: "/media/medical/medical-12.jpg", group: "medical", region: "Gaza" },
  { src: "/media/medical/medical-13.jpg", group: "medical", region: "Gaza" },
  { src: "/media/medical/medical-14.jpg", group: "medical", region: "Gaza" },
  { src: "/media/medical/medical-15.jpg", group: "medical", region: "Gaza" },
  { src: "/media/medical/medical-16.jpg", group: "medical", region: "Gaza" },
  { src: "/media/medical/medical-17.jpg", group: "medical", region: "Gaza" },
  { src: "/media/medical/medical-18.jpg", group: "medical", region: "Gaza" },
  { src: "/media/medical/medical-19.jpg", group: "medical", region: "Gaza" },
  { src: "/media/medical/medical-20.jpg", group: "medical", region: "Gaza" },
  { src: "/media/medical/medical-21.jpg", group: "medical", region: "Gaza" },
  { src: "/media/medical/medical-22.jpg", group: "medical", region: "Gaza" },
  { src: "/media/medical/medical-23.jpg", group: "medical", region: "Gaza" },
  { src: "/media/medical/medical-24.jpg", group: "medical", region: "Gaza" },
  { src: "/media/medical/medical-25.jpg", group: "medical", region: "Gaza" },
  { src: "/media/medical/medical-26.jpg", group: "medical", region: "Gaza" },
  { src: "/media/medical/medical-27.jpg", group: "medical", region: "Gaza" },
  { src: "/media/medical/medical-28.jpg", group: "medical", region: "Gaza" },
  { src: "/media/medical/medical-29.jpg", group: "medical", region: "Gaza" },
  { src: "/media/medical/medical-30.jpg", group: "medical", region: "Gaza" },
  { src: "/media/medical/medical-31.jpg", group: "medical", region: "Gaza" },
  { src: "/media/medical/medical-32.jpg", group: "medical", region: "Gaza" },
  { src: "/media/medical/medical-33.jpg", group: "medical", region: "Gaza" },
  { src: "/media/medical/medical-34.jpg", group: "medical", region: "Gaza" },
  { src: "/media/medical/medical-35.jpg", group: "medical", region: "Gaza" },
  { src: "/media/medical/medical-36.jpg", group: "medical", region: "Gaza" },
  { src: "/media/medical/medical-37.jpg", group: "medical", region: "Gaza" },
  { src: "/media/medical/medical-38.jpg", group: "medical", region: "Gaza" },
  { src: "/media/medical/medical-39.jpg", group: "medical", region: "Gaza" },
  { src: "/media/medical/medical-40.jpg", group: "medical", region: "Gaza" },
  { src: "/media/medical/medical-41.jpg", group: "medical", region: "Gaza" },
  { src: "/media/medical/medical-42.jpg", group: "medical", region: "Gaza" },
  { src: "/media/medical/medical-43.jpg", group: "medical", region: "Gaza" },
  { src: "/media/medical/medical-44.jpg", group: "medical", region: "Gaza" },
  { src: "/media/medical/medical-45.jpg", group: "medical", region: "Gaza" },
  { src: "/media/medical/medical-46.jpg", group: "medical", region: "Gaza" },
  { src: "/media/medical/medical-47.jpg", group: "medical", region: "Gaza" },
  { src: "/media/medical/medical-48.jpg", group: "medical", region: "Gaza" },
  { src: "/media/medical/medical-49.jpg", group: "medical", region: "Gaza" },
  { src: "/media/medical/medical-50.jpg", group: "medical", region: "Gaza" },

  /* ---- GROUP: ration (Gaza food parcels) ---- */
  { src: "/media/ration/ration-01.jpg", group: "ration", region: "Gaza" },
  { src: "/media/ration/ration-02.jpg", group: "ration", region: "Gaza" },
  { src: "/media/ration/ration-03.jpg", group: "ration", region: "Gaza" },
  { src: "/media/ration/ration-04.jpg", group: "ration", region: "Gaza" },
  { src: "/media/ration/ration-05.jpg", group: "ration", region: "Gaza" },
  { src: "/media/ration/ration-06.jpg", group: "ration", region: "Gaza" },
  { src: "/media/ration/ration-07.jpg", group: "ration", region: "Gaza" },
  { src: "/media/ration/ration-08.jpg", group: "ration", region: "Gaza" },
  { src: "/media/ration/ration-09.jpg", group: "ration", region: "Gaza" },
  { src: "/media/ration/ration-10.jpg", group: "ration", region: "Gaza" },
  { src: "/media/ration/ration-11.jpg", group: "ration", region: "Gaza" },
  { src: "/media/ration/ration-12.jpg", group: "ration", region: "Gaza" },
  { src: "/media/ration/ration-13.jpg", group: "ration", region: "Gaza" },
  { src: "/media/ration/ration-14.jpg", group: "ration", region: "Gaza" },
  { src: "/media/ration/ration-15.jpg", group: "ration", region: "Gaza" },
  { src: "/media/ration/ration-16.jpg", group: "ration", region: "Gaza" },
  { src: "/media/ration/ration-17.jpg", group: "ration", region: "Gaza" },

  /* ---- GROUP: gaza-food (Hot meals and parcels) ---- */
  { src: "/media/gaza-food/gaza-food-01.png", group: "gaza-food", region: "Gaza" },
  { src: "/media/gaza-food/gaza-food-02.png", group: "gaza-food", region: "Gaza" },
  { src: "/media/gaza-food/gaza-food-03.png", group: "gaza-food", region: "Gaza" },
  { src: "/media/gaza-food/gaza-food-04.png", group: "gaza-food", region: "Gaza" },
  { src: "/media/gaza-food/gaza-food-05.png", group: "gaza-food", region: "Gaza" },
  { src: "/media/gaza-food/gaza-food-06.png", group: "gaza-food", region: "Gaza" },
  { src: "/media/gaza-food/gaza-food-07.png", group: "gaza-food", region: "Gaza" },
  { src: "/media/gaza-food/gaza-food-08.png", group: "gaza-food", region: "Gaza" },
  { src: "/media/gaza-food/gaza-food-09.png", group: "gaza-food", region: "Gaza" },
  { src: "/media/gaza-food/gaza-food-10.png", group: "gaza-food", region: "Gaza" },
  { src: "/media/gaza-food/gaza-food-11.png", group: "gaza-food", region: "Gaza" },
  { src: "/media/gaza-food/gaza-food-12.png", group: "gaza-food", region: "Gaza" },
  { src: "/media/gaza-food/gaza-food-13.png", group: "gaza-food", region: "Gaza" },

  /* ---- GROUP: gaza-water (Water for Life) ---- */
  { src: "/media/gaza-water/gaza-water-01.jpg", group: "gaza-water", region: "Gaza" },
  { src: "/media/gaza-water/gaza-water-02.webp", group: "gaza-water", region: "Gaza" },
  { src: "/media/gaza-water/gaza-water-03.jpg", group: "gaza-water", region: "Gaza" },
  { src: "/media/gaza-water/gaza-water-04.jpg", group: "gaza-water", region: "Gaza" },
  { src: "/media/gaza-water/gaza-water-05.jpg", group: "gaza-water", region: "Gaza" },
  { src: "/media/gaza-water/gaza-water-06.jpg", group: "gaza-water", region: "Gaza" },
  { src: "/media/gaza-water/gaza-water-07.png", group: "gaza-water", region: "Gaza" },
  { src: "/media/gaza-water/gaza-water-08.png", group: "gaza-water", region: "Gaza" },
  { src: "/media/gaza-water/gaza-water-09.jpg", group: "gaza-water", region: "Gaza" },
  { src: "/media/gaza-water/gaza-water-10.jpg", group: "gaza-water", region: "Gaza" },
  { src: "/media/gaza-water/gaza-water-11.jpg", group: "gaza-water", region: "Gaza" },
  { src: "/media/gaza-water/gaza-water-12.jpg", group: "gaza-water", region: "Gaza" },
  { src: "/media/gaza-water/gaza-water-13.jpg", group: "gaza-water", region: "Gaza" },

  /* ---- GROUP: gaza-winter (Winter packages) ---- */
  { src: "/media/gaza-winter/gaza-winter-01.png", group: "gaza-winter", region: "Gaza" },
  { src: "/media/gaza-winter/gaza-winter-02.png", group: "gaza-winter", region: "Gaza" },
  { src: "/media/gaza-winter/gaza-winter-05.png", group: "gaza-winter", region: "Gaza" },
  { src: "/media/gaza-winter/gaza-winter-09.png", group: "gaza-winter", region: "Gaza" },
  /* =========================================================================
   * NEW CLIENT IMAGES (2026)
   * -------------------------------------------------------------------------
   * These were added later and are grouped by their source campaign. They are
   * tagged into the SAME filter tabs as the images above (e.g. `field`,
   * `ration`, `gaza-food`), so they appear alongside the older photos when
   * that tab is selected.
   *
   * NOTE: some folders contain BOTH a `.png` and a `.jpg` with the same base
   * name (e.g. `gaza-food-01.png` AND `gaza-food-01.jpg`). They are two
   * different files — only list the one you actually want to show.
   * ========================================================================= */

  /* ---- Medical camps (Pillar A) -> group: field ---- */
  { src: "/media/field/pillar-a-camp-01.jpg", group: "field", region: "Pakistan" },
  { src: "/media/field/pillar-a-camp-02.jpg", group: "field", region: "Pakistan" },
  { src: "/media/field/pillar-a-camp-03.jpg", group: "field", region: "Pakistan" },
  { src: "/media/field/pillar-a-camp-04.jpg", group: "field", region: "Pakistan" },
  { src: "/media/field/pillar-a-camp-05.jpg", group: "field", region: "Pakistan" },
  { src: "/media/field/pillar-a-camp-06.jpg", group: "field", region: "Pakistan" },
  { src: "/media/field/pillar-a-camp-07.jpg", group: "field", region: "Pakistan" },
  { src: "/media/field/pillar-a-camp-08.jpg", group: "field", region: "Pakistan" },
  { src: "/media/field/pillar-a-camp-09.jpg", group: "field", region: "Pakistan" },
  { src: "/media/field/pillar-a-camp-10.jpg", group: "field", region: "Pakistan" },
  { src: "/media/field/pillar-a-camp-11.jpg", group: "field", region: "Pakistan" },
  { src: "/media/field/pillar-a-camp-12.jpg", group: "field", region: "Pakistan" },
  { src: "/media/field/pillar-a-camp-13.jpg", group: "field", region: "Pakistan" },
  { src: "/media/field/pillar-a-camp-14.jpg", group: "field", region: "Pakistan" },
  { src: "/media/field/pillar-a-camp-15.jpg", group: "field", region: "Pakistan" },
  { src: "/media/field/pillar-a-camp-16.jpg", group: "field", region: "Pakistan" },

  /* ---- Medical conferences (Pillar C) -> group: field ---- */
  { src: "/media/field/pillar-c-conference-01.jpg", group: "field", region: "Pakistan" },
  { src: "/media/field/pillar-c-conference-02.jpg", group: "field", region: "Pakistan" },
  { src: "/media/field/pillar-c-conference-03.jpg", group: "field", region: "Pakistan" },
  { src: "/media/field/pillar-c-conference-04.jpg", group: "field", region: "Pakistan" },
  { src: "/media/field/pillar-c-conference-05.jpg", group: "field", region: "Pakistan" },
  { src: "/media/field/pillar-c-conference-06.jpg", group: "field", region: "Pakistan" },
  { src: "/media/field/pillar-c-conference-07.jpg", group: "field", region: "Pakistan" },
  { src: "/media/field/pillar-c-conference-08.jpg", group: "field", region: "Pakistan" },
  { src: "/media/field/pillar-c-conference-09.jpg", group: "field", region: "Pakistan" },
  { src: "/media/field/pillar-c-conference-10.jpg", group: "field", region: "Pakistan" },
  { src: "/media/field/pillar-c-conference-11.jpg", group: "field", region: "Pakistan" },
  { src: "/media/field/pillar-c-conference-12.jpg", group: "field", region: "Pakistan" },
  { src: "/media/field/pillar-c-conference-13.jpg", group: "field", region: "Pakistan" },
  { src: "/media/field/pillar-c-conference-14.jpg", group: "field", region: "Pakistan" },
  { src: "/media/field/pillar-c-conference-15.jpg", group: "field", region: "Pakistan" },
  { src: "/media/field/pillar-c-conference-16.jpg", group: "field", region: "Pakistan" },
  { src: "/media/field/pillar-c-conference-17.jpg", group: "field", region: "Pakistan" },
  { src: "/media/field/pillar-c-conference-18.jpg", group: "field", region: "Pakistan" },
  { src: "/media/field/pillar-c-conference-19.jpg", group: "field", region: "Pakistan" },
  { src: "/media/field/pillar-c-conference-20.jpg", group: "field", region: "Pakistan" },
  { src: "/media/field/pillar-c-conference-21.jpg", group: "field", region: "Pakistan" },
  { src: "/media/field/pillar-c-conference-22.jpg", group: "field", region: "Pakistan" },
  { src: "/media/field/pillar-c-conference-23.jpg", group: "field", region: "Pakistan" },
  { src: "/media/field/pillar-c-conference-24.jpg", group: "field", region: "Pakistan" },
  { src: "/media/field/pillar-c-conference-25.jpg", group: "field", region: "Pakistan" },
  { src: "/media/field/pillar-c-conference-26.jpg", group: "field", region: "Pakistan" },
  { src: "/media/field/pillar-c-conference-27.jpg", group: "field", region: "Pakistan" },
  { src: "/media/field/pillar-c-conference-28.jpg", group: "field", region: "Pakistan" },
  { src: "/media/field/pillar-c-conference-29.jpg", group: "field", region: "Pakistan" },
  { src: "/media/field/pillar-c-conference-30.jpg", group: "field", region: "Pakistan" },
  { src: "/media/field/pillar-c-conference-31.jpg", group: "field", region: "Pakistan" },
  { src: "/media/field/pillar-c-conference-32.jpg", group: "field", region: "Pakistan" },
  { src: "/media/field/pillar-c-conference-33.jpg", group: "field", region: "Pakistan" },
  { src: "/media/field/pillar-c-conference-34.jpg", group: "field", region: "Pakistan" },
  { src: "/media/field/pillar-c-conference-35.jpg", group: "field", region: "Pakistan" },
  { src: "/media/field/pillar-c-conference-36.jpg", group: "field", region: "Pakistan" },
  { src: "/media/field/pillar-c-conference-37.jpg", group: "field", region: "Pakistan" },
  { src: "/media/field/pillar-c-conference-38.jpg", group: "field", region: "Pakistan" },
  { src: "/media/field/pillar-c-conference-39.jpg", group: "field", region: "Pakistan" },
  { src: "/media/field/pillar-c-conference-40.jpg", group: "field", region: "Pakistan" },
  { src: "/media/field/pillar-c-conference-41.jpg", group: "field", region: "Pakistan" },
  { src: "/media/field/pillar-c-conference-42.jpg", group: "field", region: "Pakistan" },
  { src: "/media/field/pillar-c-conference-43.jpg", group: "field", region: "Pakistan" },
  { src: "/media/field/pillar-c-conference-44.jpg", group: "field", region: "Pakistan" },
  { src: "/media/field/pillar-c-conference-45.jpg", group: "field", region: "Pakistan" },

  /* ---- Qurbani (Pillar A food relief) -> group: ration ---- */
  { src: "/media/ration/pillar-a-qurbani-01.jpg", group: "ration", region: "Gaza" },
  { src: "/media/ration/pillar-a-qurbani-02.jpg", group: "ration", region: "Gaza" },
  { src: "/media/ration/pillar-a-qurbani-03.jpg", group: "ration", region: "Gaza" },
  { src: "/media/ration/pillar-a-qurbani-04.jpg", group: "ration", region: "Gaza" },
  { src: "/media/ration/pillar-a-qurbani-05.jpg", group: "ration", region: "Gaza" },
  { src: "/media/ration/pillar-a-qurbani-06.jpg", group: "ration", region: "Gaza" },
  { src: "/media/ration/pillar-a-qurbani-07.jpg", group: "ration", region: "Gaza" },
  { src: "/media/ration/pillar-a-qurbani-08.jpg", group: "ration", region: "Gaza" },
  { src: "/media/ration/pillar-a-qurbani-09.jpg", group: "ration", region: "Gaza" },
  { src: "/media/ration/pillar-a-qurbani-10.jpg", group: "ration", region: "Gaza" },

  /* ---- Gaza food & hot meals -> group: gaza-food ---- */
  { src: "/media/gaza-food/gaza-food-01.jpg", group: "gaza-food", region: "Gaza" },
  { src: "/media/gaza-food/gaza-food-02.jpg", group: "gaza-food", region: "Gaza" },
  { src: "/media/gaza-food/gaza-food-03.jpg", group: "gaza-food", region: "Gaza" },
  { src: "/media/gaza-food/gaza-food-04.jpg", group: "gaza-food", region: "Gaza" },
  { src: "/media/gaza-food/gaza-food-05.jpg", group: "gaza-food", region: "Gaza" },
  { src: "/media/gaza-food/gaza-food-06.jpg", group: "gaza-food", region: "Gaza" },
  { src: "/media/gaza-food/gaza-food-07.jpg", group: "gaza-food", region: "Gaza" },
  { src: "/media/gaza-food/gaza-food-08.jpg", group: "gaza-food", region: "Gaza" },
  { src: "/media/gaza-food/gaza-food-09.jpg", group: "gaza-food", region: "Gaza" },
  { src: "/media/gaza-food/gaza-food-10.jpg", group: "gaza-food", region: "Gaza" },
  { src: "/media/gaza-food/gaza-food-11.jpg", group: "gaza-food", region: "Gaza" },
  { src: "/media/gaza-food/gaza-food-12.jpg", group: "gaza-food", region: "Gaza" },
  { src: "/media/gaza-food/gaza-food-13.jpg", group: "gaza-food", region: "Gaza" },
  { src: "/media/gaza-food/gaza-food-14.jpg", group: "gaza-food", region: "Gaza" },
  { src: "/media/gaza-food/gaza-food-15.jpg", group: "gaza-food", region: "Gaza" },
  { src: "/media/gaza-food/gaza-food-16.jpg", group: "gaza-food", region: "Gaza" },
  { src: "/media/gaza-food/gaza-food-17.jpg", group: "gaza-food", region: "Gaza" },
  { src: "/media/gaza-food/gaza-food-18.jpg", group: "gaza-food", region: "Gaza" },
  { src: "/media/gaza-food/gaza-food-19.jpg", group: "gaza-food", region: "Gaza" },
  { src: "/media/gaza-food/gaza-food-20.jpg", group: "gaza-food", region: "Gaza" },
  { src: "/media/gaza-food/gaza-food-21.jpg", group: "gaza-food", region: "Gaza" },
  { src: "/media/gaza-food/gaza-food-22.jpg", group: "gaza-food", region: "Gaza" },
  { src: "/media/gaza-food/gaza-food-23.jpg", group: "gaza-food", region: "Gaza" },
  { src: "/media/gaza-food/gaza-food-24.jpg", group: "gaza-food", region: "Gaza" },
  { src: "/media/gaza-food/gaza-food-25.jpg", group: "gaza-food", region: "Gaza" },
  { src: "/media/gaza-food/gaza-food-26.jpg", group: "gaza-food", region: "Gaza" },
  { src: "/media/gaza-food/gaza-food-27.jpg", group: "gaza-food", region: "Gaza" },
  { src: "/media/gaza-food/gaza-food-28.jpg", group: "gaza-food", region: "Gaza" },
  { src: "/media/gaza-food/gaza-food-29.jpg", group: "gaza-food", region: "Gaza" },
  { src: "/media/gaza-food/gaza-food-30.jpg", group: "gaza-food", region: "Gaza" },
  { src: "/media/gaza-food/gaza-food-31.jpg", group: "gaza-food", region: "Gaza" },
  { src: "/media/gaza-food/gaza-food-32.jpg", group: "gaza-food", region: "Gaza" },
  { src: "/media/gaza-food/gaza-food-33.jpg", group: "gaza-food", region: "Gaza" },
  { src: "/media/gaza-food/gaza-food-34.jpg", group: "gaza-food", region: "Gaza" },

  /* ---- Gaza winter -> group: gaza-winter ---- */
  { src: "/media/gaza-winter/gaza-winter-01.jpg", group: "gaza-winter", region: "Gaza" },
  { src: "/media/gaza-winter/gaza-winter-02.jpg", group: "gaza-winter", region: "Gaza" },
  { src: "/media/gaza-winter/gaza-winter-03.jpg", group: "gaza-winter", region: "Gaza" },
  { src: "/media/gaza-winter/gaza-winter-04.jpg", group: "gaza-winter", region: "Gaza" },
  { src: "/media/gaza-winter/gaza-winter-05.jpg", group: "gaza-winter", region: "Gaza" },
  { src: "/media/gaza-winter/gaza-winter-06.jpg", group: "gaza-winter", region: "Gaza" },
  { src: "/media/gaza-winter/gaza-winter-07.jpg", group: "gaza-winter", region: "Gaza" },
  { src: "/media/gaza-winter/gaza-winter-08.jpg", group: "gaza-winter", region: "Gaza" },
  { src: "/media/gaza-winter/gaza-winter-09.jpg", group: "gaza-winter", region: "Gaza" },
  { src: "/media/gaza-winter/gaza-winter-10.jpg", group: "gaza-winter", region: "Gaza" },
  { src: "/media/gaza-winter/gaza-winter-11.jpg", group: "gaza-winter", region: "Gaza" },
  { src: "/media/gaza-winter/gaza-winter-12.jpg", group: "gaza-winter", region: "Gaza" },
  { src: "/media/gaza-winter/gaza-winter-13.jpg", group: "gaza-winter", region: "Gaza" },
  { src: "/media/gaza-winter/gaza-winter-14.jpg", group: "gaza-winter", region: "Gaza" },
  { src: "/media/gaza-winter/gaza-winter-15.jpg", group: "gaza-winter", region: "Gaza" },
  { src: "/media/gaza-winter/gaza-winter-16.jpg", group: "gaza-winter", region: "Gaza" },
  { src: "/media/gaza-winter/gaza-winter-17.jpg", group: "gaza-winter", region: "Gaza" },
  { src: "/media/gaza-winter/gaza-winter-18.jpg", group: "gaza-winter", region: "Gaza" },
];
