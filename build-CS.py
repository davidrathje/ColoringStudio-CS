import os

# Definition av arkitektur
folders = ['assets/lineart', 'data/medium', 'docs', 'src', 'dist']
files = {
    'src/printRenderer.js': '// CMS-004R-B1.5 - Vanilla Rendering Engine\n' +
                             'export function drawCombinedPlanPng() { console.log("Rendering..."); return document.createElement("canvas"); }',
    'src/index.js': 'export { drawCombinedPlanPng } from "./printRenderer.js";',
    'src/interfaces.js': 'export class PaletteRenderContext { constructor(palette = []) { this.palette = palette; } }',
    'dist/index.html': '''<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><title>Coloring Studio (CS)</title></head>
<body>
    <h1>CS Production Engine</h1>
    <button id="run">Exekvera RC1</button>
    <script type="module">
        import { drawCombinedPlanPng } from '../src/printRenderer.js';
        document.getElementById('run').addEventListener('click', async () => {
            const res = await fetch('../data/medium/Ohuhu_Master.xlsx');
            console.log("Data-stream initierad.");
            const canvas = drawCombinedPlanPng();
            alert("RC1 Rendering Triggered");
        });
    </script>
</body>
</html>'''
}

# Skapa struktur
for folder in folders:
    os.makedirs(folder, exist_ok=True)

# Skapa filer
for path, content in files.items():
    with open(path, 'w') as f:
        f.write(content)

print("Coloring Studio (CS) miljö är nu fysiskt etablerad.")