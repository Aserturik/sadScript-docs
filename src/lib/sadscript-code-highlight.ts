type Node = {
  type: string;
  lang?: string;
  value?: string;
  children?: Node[];
};

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function highlight(raw: string): string {
  const keywords = [
    'si_duele', 'si_no_duele', 'si_no_duele_pero', 'mientras_duela',
    'para_que_duela', 'aunque_no_quiera', 'cortarme', 'seguir_fingiendo',
    'ritual', 'regresar_a_llorar', 'confesar', 'intentar_sentir',
    'romperse', 'colapsar', 'afirmar', 'segun_mi_animo', 'caso',
    'por_defecto_mio', 'sum', 'prod', 'max', 'min', 'prom',
    'vivo', 'muerto', 'nulo'
  ];
  const types = ['dolor', 'vacio', 'esperanza', 'recuerdo', 'cicatriz', 'trauma'];

  let result = escapeHtml(raw);
  result = result.replace(/(\/\/.*)/g, '<span class="comment">$1</span>');
  result = result.replace(/("([^"\\]|\\.)*")/g, '<span class="string">$1</span>');
  result = result.replace(/\b(\d+\.?\d*(?:e\d+)?)\b/g, '<span class="number">$1</span>');

  for (const kw of keywords) {
    result = result.replace(new RegExp(`\\b(${kw})\\b`, 'g'), '<span class="keyword">$1</span>');
  }

  for (const t of types) {
    result = result.replace(new RegExp(`\\b(${t})\\b`, 'g'), '<span class="type">$1</span>');
  }

  return result;
}

export default function sadscriptCodeHighlight() {
  return (tree: Node) => {
    const walk = (node: Node, parent?: Node, index?: number) => {
      if (node.type === 'code' && node.lang === 'sadscript' && parent && typeof index === 'number') {
        const html = `<pre class="sadscript-code"><code>${highlight(node.value ?? '')}</code></pre>`;
        parent.children?.splice(index, 1, { type: 'html', value: html });
        return;
      }

      for (const [childIndex, child] of (node.children ?? []).entries()) {
        walk(child, node, childIndex);
      }
    };

    walk(tree);
  };
}
