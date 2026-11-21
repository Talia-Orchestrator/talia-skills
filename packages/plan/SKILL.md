---
name: plan
description_en: "Conversational planning: clarify choices with host forms, wait for answers, and propose a verifiable plan before execution."
description_zh: "对话式规划：通过宿主表单澄清选择、等待回答，并在执行前提出可验证的计划。"
---

# Piano guidato

Trasforma un obiettivo in un piano verificabile con una conversazione breve. Conserva richiesta originale e vincoli confermati. Esegui il piano solo dopo approvazione esplicita.

## Quando usare

- Chiarire un obiettivo prima di agire.
- Risolvere decisioni sostanziali ancora aperte.
- Rivedere o approvare un piano.

Non rallentare richieste operative già complete e autorizzate. Non usare per semplici domande informative.

## Prerequisiti e confini

Usa contesto, allegati e letture autorizzate. Durante raccolta e revisione non avviare implementazioni, deleghe esecutive o scritture senza richiesta esplicita. Non chiedere dati già disponibili. Rispetta il protocollo di input e i controlli dell'host.

## 1. Comprendi il risultato

Identifica obiettivo, destinatario, vincoli, criteri di successo e decisioni che cambiano ambito o soluzione. Per un repository leggi i punti pertinenti prima di chiedere ciò che il codice può chiarire. Separa fatti, ipotesi e incognite.

## 2. Chiedi solo le decisioni mancanti

Raccogli da una a tre informazioni per turno. Preferisci una domanda se la risposta determina le successive. Non creare domande artificiali o ripetere requisiti confermati. Per dettagli reversibili usa un default dichiarato.

Per preferenze aperte puoi proporre brevi esempi o una raccomandazione motivata. Non trasformare suggerimenti del modello in un insieme chiuso obbligatorio.

## 3. Scegli il widget corretto

La regola vale per Commander e per gli altri agenti: quando il canale form è disponibile, ogni richiesta di input usa esattamente un blocco `<agent-input-form>` con JSON valido. Non sostituirlo con domande Markdown, elenchi numerati o «rispondi con tre numeri». Non affermare che Commander non supporta i form.

Usa esclusivamente lo schema fornito dall'host:
- `fields`: campi con ID stabili, etichetta chiara, tipo e obbligatorietà.
- `select`: una sola risposta, esclusivamente in un dominio chiuso definito da strumenti, schema, capacità runtime o protocollo. Include `options` con `value` e `label`.
- `multiselect`: più risposte compatibili nello stesso dominio chiuso. Include `options` con `value` e `label`. Scrivi nell'etichetta che sono ammesse più scelte.
- `text`: risposta libera breve.
- `textarea`: preferenze aperte, spiegazioni, vincoli o revisioni.
- `number`: quantità numeriche, con limiti solo quando giustificati.
- `boolean`: informazione realmente binaria, non un sostituto delle conferme richieste.
- `file` o `directory`: solo quando serve una risorsa non già disponibile.

### Scelta singola e disposizione verticale

Per una scelta singola usa `select`; il renderer decide la rappresentazione concreta, ad esempio radio verticali o menu. Non inventare un tipo `radio`, proprietà di layout o CSS. Non promettere una disposizione che la skill non può imporre.

Mantieni ordine logico e opzioni brevi e distinguibili. Lascia all'app larghezza, temi, responsive e accessibilità.

### Selezione multipla

Usa `multiselect` solo quando più valori possono coesistere. Non usarlo per alternative incompatibili. Non simulare una selezione multipla con più campi booleani. Mantieni la presentazione nativa, comprese le pill quando previste dall'app.

### «Altro» e campo libero

Usa «Altro» soltanto quando lo schema del campo e il runtime consentono esplicitamente una risposta aperta. Non aggiungerlo a domini chiusi che non lo ammettono.

Usa il meccanismo nativo disponibile, senza inventare proprietà. Per una scelta singola, il comportamento atteso è:
- «Altro» è esclusivo rispetto alle opzioni definite.
- Il testo è disabilitato finché «Altro» non è selezionato.
- Se selezionato, il testo diventa obbligatorio e non può contenere soltanto spazi, anche quando la domanda è facoltativa.
- Scegliendo un'altra opzione, il testo torna disabilitato e non obbligatorio.
- Viene inviata una sola risposta.

Per selezione multipla, non presumere che «Altro» sia esclusivo: rispetta il contratto nativo e richiedi testo non vuoto quando è attivo.

Non duplicare «Altro» con un'opzione manuale e un campo testo separato: non garantisce il comportamento condizionale. Se lo schema esposto non supporta «Altro», usa `text` o `textarea` per la domanda aperta. Non simulare il controllo mancante né dichiararlo verificato.

### Chiarezza e limiti

Ogni campo raccoglie una sola decisione. Segna come obbligatori solo i dati necessari. Non inventare valori predefiniti, condizioni, limiti di selezione o controlli non previsti dall'host.

Quando il protocollo lo prescrive, emetti soltanto il blocco form. Metti il contesto indispensabile nelle etichette. Non creare app o artifact per raccogliere risposte.

Solo se il canale form è realmente indisponibile e l'host consente testo normale, formula una domanda breve in prosa. Non dedurre l'indisponibilità dal ruolo Commander.

## 4. Attendi e integra le risposte

Termina il turno dopo il form. Accetta `<agent-input-submission>` e risposte spontanee. Non presentare un piano finale che dipende da input ancora mancanti.

Non considerare silenzio, chiusura del form o preselezioni come consenso. Chiedi soltanto chiarimenti necessari. Conserva i vincoli precedenti salvo modifica esplicita.

Se l'utente chiede subito una bozza, presentala con ipotesi e incognite esplicite.

## 5. Presenta e fai approvare il piano

Mostra obiettivo, decisioni, vincoli, passi, risultati attesi e verifiche concrete. Evidenzia dipendenze e rischi rilevanti. Per software indica componenti da riusare, modifiche previste e test. Non promettere risultati non verificati.

Separa il piano dalla richiesta di approvazione. Per la conferma usa il form dell'host con un campo libero che permetta di approvare o proporre modifiche. Non far riselezionare requisiti già confermati.

L'approvazione deve riferirsi alla versione mostrata. Se intenzione e testo si contraddicono, chiarisci. Una revisione sostanziale richiede approvazione del piano aggiornato. Salva solo nella destinazione autorizzata. Dopo approvazione procedi nel rispetto dei controlli dell'host.

## Risultato atteso

Widget adatti agli input realmente mancanti, seguiti da un piano verificabile e da una decisione esplicita. Distingui pianificato, autorizzato, eseguito e verificato. La scelta corretta del tipo di campo non prova da sola il rendering o il funzionamento nell'app.
