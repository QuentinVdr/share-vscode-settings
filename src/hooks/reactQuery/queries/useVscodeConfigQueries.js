import { findVscodeConfigById } from '@api/VscodeConfig/VscodeConfigApi';
import { vscodeConfigQKey } from '@stores/ReactQueryKEYS';
import { useQuery } from '@tanstack/react-query';

export const useVscodeConfigByIdQuery = (id, options) =>
  useQuery({
    ...options,
    queryKey: vscodeConfigQKey.detail(id),
    queryFn: () => findVscodeConfigById(id)
  });

export const useVscodeConfigByIdQueryMock = (id, options) =>
  useQuery({
    ...options,
    queryKey: vscodeConfigQKey.detail(id),
    queryFn: () => findVscodeConfigByIdMock(id)
  });

/**
 * Finds a VSCode configuration by its ID.
 *
 * @param {string} id - The unique identifier for the configuration.
 * @returns {Promise<{_id: string, extensionIds: string[]}>} The configuration data.
 */
const findVscodeConfigByIdMock = (id) =>
  Promise.resolve({
    _id: id,
    extensionIds: [
      'adpyke.vscode-sql-formatter',
      'albymor.increment-selection',
      'alefragnani.project-manager',
      'asciidoctor.asciidoctor-vscode',
      'bierner.markdown-mermaid',
      'bradlc.vscode-tailwindcss',
      'bruno-api-client.bruno',
      'budparr.language-hugo-vscode',
      'catppuccin.catppuccin-vsc',
      'chakrounanas.turbo-console-log',
      'charliermarsh.ruff',
      'christian-kohler.npm-intellisense',
      'christian-kohler.path-intellisense',
      'codezombiech.gitignore',
      'davidanson.vscode-markdownlint',
      'dbaeumer.vscode-eslint',
      'dracula-theme.theme-dracula',
      'dsznajder.es7-react-js-snippets',
      'eamodio.gitlens',
      'ecmel.vscode-html-css',
      'editorconfig.editorconfig',
      'enkia.tokyo-night',
      'equinusocio.vsc-material-theme',
      'equinusocio.vsc-material-theme-icons',
      'esbenp.prettier-vscode',
      'formulahendry.code-runner',
      'ginfuru.better-nunjucks',
      'github.copilot',
      'github.copilot-chat',
      'hbenl.vscode-test-explorer',
      'iceworks-team.iceworks-style-helper',
      'jebbs.plantuml',
      'kevinrose.vsc-python-indent',
      'leetcode.vscode-leetcode',
      'lokalise.i18n-ally',
      'meganrogge.template-string-converter',
      'mgmcdermott.vscode-language-babel',
      'mhutchie.git-graph',
      'mikestead.dotenv',
      'monokai.theme-monokai-pro-vscode',
      'mrmlnc.vscode-scss',
      'ms-azuretools.vscode-docker',
      'ms-dotnettools.vscode-dotnet-runtime',
      'ms-python.black-formatter',
      'ms-python.debugpy',
      'ms-python.pylint',
      'ms-python.python',
      'ms-python.vscode-pylance',
      'ms-vscode-remote.remote-wsl',
      'ms-vscode.test-adapter-converter',
      'ms-vsliveshare.vsliveshare',
      'msjsdiag.vscode-react-native',
      'mtxr.sqltools',
      'mtxr.sqltools-driver-mysql',
      'mtxr.sqltools-driver-pg',
      'nathanridley.autotrim',
      'oderwat.indent-rainbow',
      'oracle.oracledevtools',
      'orta.vscode-jest',
      'pflannery.vscode-versionlens',
      'pkief.material-icon-theme',
      'pnp.polacode',
      'pranaygp.vscode-css-peek',
      'redhat.vscode-yaml',
      'ritwickdey.liveserver',
      'sburg.vscode-javascript-booster',
      'seatonjiang.gitmoji-vscode',
      'smcpeak.default-keys-windows',
      'sonarsource.sonarlint-vscode',
      'stivo.tailwind-fold',
      'streetsidesoftware.code-spell-checker',
      'streetsidesoftware.code-spell-checker-french',
      'tabnine.tabnine-vscode',
      'teabyii.ayu',
      'usernamehw.errorlens',
      'visualstudioexptteam.intellicode-api-usage-examples',
      'visualstudioexptteam.vscodeintellicode',
      'vue.volar',
      'wmaurer.change-case',
      'yoavbls.pretty-ts-errors',
      'yzhang.markdown-all-in-one',
      'zignd.html-css-class-completion'
    ]
  });
