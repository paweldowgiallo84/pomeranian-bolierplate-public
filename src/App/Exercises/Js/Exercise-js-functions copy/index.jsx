import './styles.css';

export function Exercise() {
  const variableForTemplateString = 'Is awesome';
  const templateString = `Template string ${variableForTemplateString}`;

  function multiply(num1, num2) {
    return num1 * num2;
  }

  function getWelcomeMessage(name, amount) {
    return `Jak się masz ${name}! Jesteś ${amount} uzytkownikiem odwiedzającym tę stronę!`;
  }

  return (
    <div>
      <p>Definiowanie funkcji</p>
      <pre>
        <code>
          {`
            function multiply(num1, num2) {
                return num1 * num2;
            }
            
            const result = multiply(9, 9)  // wynik 81
            `}
        </code>
      </pre>

      <section>
        <h2>Wykorzystywanie funkcji - przykłady</h2>
        <pre>
          <code>9 * 9 = {multiply(9, 9)}</code>
        </pre>
        <pre>
          <code>{getWelcomeMessage('Darek Marek', 129384)}</code>
        </pre>
      </section>

      <p>Drugie wywołanie fukcji: {multiply(10, 10)}</p>
      <p>Nasz templates string: </p>
      <p id="uniq-id">{templateString}</p>
    </div>
  );
}
