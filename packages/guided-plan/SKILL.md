---
name: guided-plan
description_en: "Guide a request into a confirmed action plan: ask targeted questions, gather requirements, present the plan, then execute it on approval or save the prompt for later."
description_zh: "将请求引导为已确认的行动计划：提出针对性问题、收集需求、呈现计划，经确认后执行，或保存提示以便稍后实施。"
---

# Piano guidato

Trasforma una richiesta in un piano chiaro e attuabile e, solo dopo conferma esplicita, lo esegui. Non usare questo percorso per richieste immediate senza esecuzione successiva.

1. **Chiarisci l'obiettivo.** Se la richiesta basta per pianificare, non fare domande; altrimenti chiedi in un solo blocco solo ciò che cambia il piano: risultato atteso, destinatario, vincoli, materiali disponibili e criterio di successo. Non ripetere ciò che è già nel contesto né chiedere dettagli reversibili.
2. **Raccogli le informazioni.** Conserva la richiesta originale, elenca vincoli e dipendenze e rendi esplicite le ipotesi reversibili; non inventare i dati mancanti.
3. **Presenta il piano.** Passi numerati in ordine di esecuzione, con risultato atteso e verifica di completamento per ciascuno; segnala input o decisioni ancora aperte.
4. **Chiedi la conferma prima di attuare.** «Procedo con l'esecuzione del piano?» La conferma copre l'intero piano; una modifica sostanziale del piano richiede una nuova conferma. Le conferme di sicurezza dell'host restano obbligatorie.
5. **Se l'utente conferma:** attua i passi nell'ordine pianificato, verificando il risultato atteso di ciascuno; se un passo resta bloccato, fermati su quel blocco con l'evidenza e non sostituire il piano senza chiedere.
6. **Se l'utente declina:** non attuare nulla. Salva prompt originale e piano per l'attuazione successiva dove l'host lo consenta (attività, progetto o documento) e indica all'utente dove riprenderlo; se non c'è un archivio disponibile, consegna il testo completo di prompt e piano da conservare.
