export { toggle, previous, next, exit };
export { Editor, Configuration, Repository, State, Settings };

async function toggle(editor: Editor, repository: Repository) {
  const { isActive } = await repository.get();

  if (isActive) {
    await exit(editor, repository);
  } else {
    await start(editor, repository);
  }
}

async function previous(editor: Editor, repository: Repository) {
  const { isActive } = await repository.get();

  if (isActive) {
    await editor.openPreviousFile();
  }
}

async function next(editor: Editor, repository: Repository) {
  const { isActive } = await repository.get();

  if (isActive) {
    await editor.openNextFile();
  }
}

async function exit(editor: Editor, repository: Repository) {
  const { isActive } = await repository.get();

  if (isActive) {
    await restoreSettings(editor, repository);
    await editor.showSideBar();
    await repository.store({ isActive: false });
  }
}

async function restoreSettings(editor: Editor, repository: Repository) {
  const { settings } = await repository.get();

  if (settings) {
    await editor.setSettings(settings);
  }
}

async function start(editor: Editor, repository: Repository) {
  await setSlidesSettings(editor, repository);

  try {
    await openAllSlides(editor);
  } catch (error) {
    editor.showMessage(
      "I kept the sidebar open so you can open files manually!"
    );
    editor.showError(`I failed to open all slides because: ${error}`);
    await repository.store({ isActive: true });
    return;
  }

  await editor.hideSideBar();
  await repository.store({ isActive: true });
}

async function setSlidesSettings(editor: Editor, repository: Repository) {
  await repository.store({
    settings: await editor.getSettings()
  });
  await editor.setSettings(getSlidesSettings(editor));
}

import { settings as defaults } from "./settings";

function getSlidesSettings(editor: Editor): Settings {
  const { theme, fontFamily, previewMarkdownFiles } = editor.getConfiguration();

  return JSON.stringify({
    ...defaults,
    ...(theme && { "workbench.colorTheme": theme }),
    ...(fontFamily && { "editor.fontFamily": fontFamily }),
    ...(fontFamily && { "terminal.integrated.fontFamily": fontFamily }),
    ...(previewMarkdownFiles && {
      "slides.previewMarkdownFiles": true
    })
  });
}

async function openAllSlides(editor: Editor) {
  await editor.closeAllTabs();
  await editor.openAllFiles();
}

interface Editor {
  closeAllTabs(): Promise<void>;
  openAllFiles(): Promise<void>;
  openPreviousFile(): Promise<void>;
  openNextFile(): Promise<void>;
  hideSideBar(): Promise<void>;
  showSideBar(): Promise<void>;
  getSettings(): Promise<Settings | null>;
  setSettings(settings: Settings): Promise<void>;
  showError(message: string): void;
  showMessage(message: string): void;
  getConfiguration(): Configuration;
}

interface Configuration {
  theme: string | null | undefined;
  fontFamily: string | null | undefined;
  previewMarkdownFiles: boolean;
}

interface Repository {
  store(state: Partial<State>): Promise<void>;
  get(): Promise<State>;
}

interface State {
  settings: Settings | null;
  isActive: boolean;
}

type Settings = string;
