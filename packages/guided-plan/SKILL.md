---
name: guided-plan
description_en: "Plan interactively: investigate context, ask the user focused decision questions, revise understanding, present a verifiable plan, and execute only after explicit approval."
description_zh: "交互式规划：先调查背景，向用户提出关键决策问题，更新理解并提交可验证的计划；只有明确批准后才执行。"
---

# Piano guidato

Questa skill è una **conversazione di pianificazione**, non un generatore immediato di elenchi. Quando l'utente la seleziona, conserva la richiesta originale e conduci un breve confronto sulle decisioni che cambiano il risultato. Concludi con un piano verificabile; eseguilo solo dopo una scelta esplicita dell'utente. Non avviare lavori, creare file o delegare durante la raccolta e la revisione del piano, salvo letture necessarie a capire il contesto.

## 1. Capisci prima di chiedere

Leggi richiesta, risposte precedenti, allegati e fonti pertinenti già autorizzate. Per lavori su un repository ispeziona i punti rilevanti prima di chiedere ciò che il codice può chiarire. Separa fatti verificati, inferenze e incognite. Individua obiettivo, destinatario, contesto, vincoli, criteri di successo e scelte che influenzano architettura, ambito o priorità.

Per ogni risultato richiesto ricostruisci il percorso attuale, il cambiamento desiderato e la prova che lo renderebbe accettabile. Per una landing page, per esempio, verifica se brief e materiali indicano già destinatario, promessa, prova a sostegno e azione del visitatore. Per un cambiamento software segui un caso reale attraverso ingresso, dati, componenti esistenti e verifica finale. Approfondisci aspetti come compatibilità, accessi o gestione degli errori quando cambiano la fattibilità. Registra il riferimento alla fonte che sostiene le decisioni importanti. Se due fonti divergono, verifica quale descrive lo stato corrente; coinvolgi l’utente quando resta una scelta di intenti.

Limita ogni ricerca a una lacuna identificata. Riutilizza le evidenze raccolte nei turni precedenti. Se una fonte è indisponibile, prova una fonte alternativa pertinente una volta; se resta incerta, registra il limite. Per allegati estesi leggi prima indice e sezioni rilevanti. Termina il turno subito dopo il questionario e attendi un nuovo messaggio dell’utente. La pianificazione non avvia timer, turni di auto-risposta, sottogruppi di agenti o tentativi periodici.

## 2. Apri il confronto

Per una richiesta aperta o con più soluzioni plausibili, **il primo passo visibile è una breve sintesi di ciò che hai capito seguita da 1–3 domande di decisione**. Chiedi ciò che può cambiare davvero il piano: risultato atteso, priorità, confini, compromessi, esempi, criterio di accettazione. Per prima cosa prova a tradurre ogni decisione in 2–4 risposte cliccabili ricavate dal contesto. Usa la scelta singola quando le alternative si escludono e la selezione multipla quando possono coesistere. Per esempio, «Qual è l’azione principale?» ammette una sola priorità; «Quali canali sono già disponibili?» può ammettere più risposte. Quando puoi motivare una preferenza, metti per prima quella raccomandata, marca «(consigliata)» e spiega in una frase il compromesso di ciascuna. Lascia disponibile la risposta libera: le opzioni sono suggerimenti, non un limite alla scelta. Riserva una domanda aperta a un dato che solo l’utente può fornire, come un indirizzo preciso, o a casi in cui proporre alternative orienterebbe la risposta senza basi. Il testo libero resta disponibile anche a chi sceglie «Altro». Una domanda alla volta è preferibile quando la risposta influenza le domande successive.

Non usare «se il contesto basta, passa direttamente al piano» come scorciatoia per una richiesta aperta. Se tutti i dettagli decisivi sono già espliciti, evita domande artificiali: di' che le decisioni necessarie sono già definite e presenta il piano. Non ripetere informazioni risolte né chiedere permessi generici prima di avere un piano concreto. Per dettagli reversibili scegli un default dichiarato.

**Aspetta la risposta.** Non mostrare nello stesso turno un piano finale che dipende da domande ancora aperte. Non interpretare il silenzio, la chiusura del form o un valore preselezionato come risposta.

## 3. Raccogli le risposte e approfondisci solo se serve

Dopo **ogni** questionario, anche incompleto, confronta la risposta con le decisioni precedenti. Conserva ciò che è deciso, aggiorna ciò che è cambiato e individua le nuove incognite introdotte dalla risposta. Per ciascuna chiediti quale passo, risultato o verifica cambierebbe. Risolvi dalle fonti i fatti verificabili. Una scelta delegata all’agente è risolta. Se l’utente dice «non so», valuta un’ipotesi reversibile o presenta le due conseguenze possibili.

Apri un altro giro solo quando la precedente risposta ha fatto avanzare il piano e resta una scelta materiale che richiede l’utente. Se tutte le scelte sono risolte, presenta il piano subito. Se un giro ripete una decisione già affrontata o non porta informazioni nuove, chiudi la raccolta. Per ogni incarico usa al massimo **tre questionari di approfondimento complessivi**, contando il primo. Conta nella conversazione anche quelli parzialmente risposti; una revisione dello stesso piano conserva il conteggio. Una richiesta esplicita di approfondire ancora consente un ulteriore giro mirato. La scelta finale sul piano è separata dalla raccolta.

Quando ti fermi, integra le ipotesi reversibili nel piano. Se una decisione indispensabile resta aperta, consegna un piano condizionale: indica la decisione, come cambiano i passi e quale parte può procedere. Un limite raggiunto, un silenzio o un annullamento non autorizzano a scegliere o eseguire. Se l’utente chiede una bozza o vuole interrompere le domande, passa subito alla consegna.

Usa il canale di input indicato dall’host. Commander supporta il form nativo. Nel canale form raccogli il gruppo in un solo blocco `<agent-input-form>` con JSON valido e ID stabili. Per scelte concrete usa `select` o, se più scelte sono compatibili, `multiselect`. Il renderer offre già «Altro» con risposta libera. Tieni la domanda breve e sposta esempi o indicazioni nella `description`. Usa un campo aperto per informazioni che l’utente deve formulare. Nel canale testo chiedi le stesse decisioni in prosa. I `default` contengono solo valori già forniti o default dichiarati; approvazioni e scelte decisive non sono preselezionate.

## 4. Presenta un piano che si possa valutare

Scrivi per chi prenderà in carico il lavoro senza aver letto la chat. Apri con obiettivo, destinatario e risultato osservabile. Riporta le decisioni acquisite e i riferimenti essenziali; segnala le ipotesi ancora rilevanti. Suddividi il lavoro in risultati verificabili nell’ordine delle dipendenze. Per ogni risultato indica cosa serve per iniziare, cosa consegnare e quale controllo dimostra che è pronto. Per il software specifica il punto di integrazione esistente e almeno uno scenario rappresentativo; per altri domini usa riscontri pertinenti, ad esempio l’approvazione del testo da parte del destinatario o una prova del percorso di iscrizione.

Prima della consegna rileggi richiesta originale e correzioni successive. Associa ogni risultato promesso a un passo e a una verifica. Prova a individuare un caso concreto in cui quel controllo passerebbe comunque con un risultato sbagliato; correggi il controllo o la sequenza se emerge una lacuna. Fai una sola revisione della bozza per consegna. Correggi le lacune sostanziali emerse e consegna; evita cicli di punteggio, nuove bozze automatiche e riletture integrali. Una dipendenza non disponibile va dichiarata con il suo effetto; date, responsabili o accessi vanno indicati come confermati solo quando esiste una fonte.

## 5. Lascia decidere sul piano mostrato

Dopo il piano offri tre scelte: `execute` (esegui), `revise` (modifica), `save` (conserva per dopo), più testo libero facoltativo. Nessuna scelta ha un default. La raccolta delle informazioni non è approvazione del piano. Con `revise` aggiorna il piano e chiedi la decisione sulla versione nuova. Se l’utente chiede esclusivamente il piano, consegnalo e termina. Se rifiuta o annulla, termina senza avviare il lavoro. Con `save` consegna un riepilogo riutilizzabile o salvalo solo dove l'utente ha autorizzato. Con `execute` senza revisioni sostanziali procedi e verifica i risultati; restano validi i controlli di sicurezza dell'host. Se scelta e testo si contraddicono, chiarisci prima di agire. Un sì espresso in testo libero vale come approvazione solo se riferito chiaramente al piano mostrato.

## Esempi di form per il canale form

Quando il risultato è noto ma la priorità della prima versione manca:

<agent-input-form>
{"fields":[{"id":"first_priority","label":"Quale priorità scelgo per la prima versione?","type":"select","required":true,"options":[{"value":"core_flow","label":"Flusso principale (consigliata) — rende subito utilizzabile il caso centrale"},{"value":"coverage","label":"Più funzioni — copre più casi, con una prima versione meno rifinita"},{"value":"polish","label":"Esperienza curata — migliora l’uso, ma rinvia funzioni secondarie"}]}]}
</agent-input-form>

Dopo aver mostrato il piano, non prima:

<agent-input-form>
{"fields":[{"id":"plan_decision","label":"Come vuoi procedere con il piano mostrato?","type":"select","required":true,"options":[{"value":"execute","label":"Esegui il piano"},{"value":"revise","label":"Modifica il piano"},{"value":"save","label":"Conserva per dopo"}]},{"id":"plan_changes","label":"Modifiche o note (facoltative)","type":"textarea","required":false}]}
</agent-input-form>
