import { useEffect, useMemo, useState } from 'react';
import {
  BookMarked,
  BookOpen,
  Brain,
  Check,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  Layers3,
  Moon,
  RotateCcw,
  Search,
  Sparkles,
  Sun,
  Target,
  X,
} from 'lucide-react';
import { examChecklist, lessons } from './courseData.js';

const storageKey = 'ams-trainer-progress';
const themeKey = 'ams-trainer-theme';

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(storageKey)) ?? {};
  } catch {
    return {};
  }
}

function loadTheme() {
  const saved = localStorage.getItem(themeKey);
  if (saved === 'dark' || saved === 'light') {
    return saved;
  }
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function App() {
  const [activeId, setActiveId] = useState(lessons[0].id);
  const [query, setQuery] = useState('');
  const [completed, setCompleted] = useState(loadProgress);
  const [theme, setTheme] = useState(loadTheme);
  const [mode, setMode] = useState('learn');
  const [flashIndex, setFlashIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [answers, setAnswers] = useState({});
  const [view, setView] = useState('lessons');
  const [glossaryQuery, setGlossaryQuery] = useState('');

  const activeLesson = lessons.find((lesson) => lesson.id === activeId) ?? lessons[0];
  const activeIndex = lessons.findIndex((lesson) => lesson.id === activeLesson.id);
  const allCards = useMemo(() => lessons.flatMap((lesson) => lesson.flashcards.map((card) => ({ ...card, lesson: lesson.title }))), []);
  const totalDone = lessons.filter((lesson) => completed[lesson.id]).length;
  const progress = Math.round((totalDone / lessons.length) * 100);

  const filteredLessons = lessons.filter((lesson) => {
    const text = `${lesson.title} ${lesson.summary} ${lesson.keyIdeas.join(' ')} ${lesson.details
      .map((detail) => `${detail.term} ${detail.body}`)
      .join(' ')}`.toLowerCase();
    return text.includes(query.toLowerCase().trim());
  });

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(completed));
  }, [completed]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem(themeKey, theme);
  }, [theme]);

  useEffect(() => {
    setAnswers({});
  }, [activeId]);

  const selectLesson = (id) => {
    setActiveId(id);
    setFlashIndex(0);
    setFlipped(false);
    setMode('learn');
    setView('lessons');
  };

  const moveLesson = (direction) => {
    const nextIndex = (activeIndex + direction + lessons.length) % lessons.length;
    selectLesson(lessons[nextIndex].id);
  };

  const toggleDone = () => {
    setCompleted((current) => ({ ...current, [activeLesson.id]: !current[activeLesson.id] }));
  };

  const currentCards = mode === 'flash' ? activeLesson.flashcards : allCards;
  const card = currentCards[flashIndex % currentCards.length];

  return (
    <main className="app-shell">
      <aside className="sidebar" aria-label="Lecții">
        <div className="brand">
          <div className="brand-mark">
            <Layers3 size={22} />
          </div>
          <div>
            <p>AMS Trainer</p>
            <span>Analiza și Modelarea Sistemelor</span>
          </div>
        </div>

        <div className="progress-block">
          <div>
            <span>Progres</span>
            <strong>{progress}%</strong>
          </div>
          <div className="progress-track" aria-label={`Progres ${progress}%`}>
            <div style={{ width: `${progress}%` }} />
          </div>
        </div>

        <label className="search">
          <Search size={18} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Caută concept"
            type="search"
          />
        </label>

        <button
          className={`glossary-nav-btn ${view === 'glossary' ? 'active' : ''}`}
          onClick={() => setView('glossary')}
          type="button"
        >
          <BookMarked size={17} />
          Glosar termeni
        </button>

        <nav className="lesson-list">
          {filteredLessons.map((lesson) => (
            <button
              className={`lesson-tab ${lesson.id === activeLesson.id && view === 'lessons' ? 'active' : ''}`}
              key={lesson.id}
              onClick={() => selectLesson(lesson.id)}
              type="button"
            >
              <span className="lesson-dot" style={{ background: lesson.color }} />
              <span>
                <b>{lesson.title}</b>
                <small>{lesson.estimated}</small>
              </span>
              {completed[lesson.id] && <Check size={16} />}
            </button>
          ))}
        </nav>
      </aside>

      <section className="workspace">
        <header className="topbar">
          <div>
            {view === 'glossary' ? (
              <>
                <span className="eyebrow">Referință rapidă</span>
                <h1>Glosar</h1>
              </>
            ) : (
              <>
                <span className="eyebrow">{activeLesson.kicker}</span>
                <h1>{activeLesson.title}</h1>
              </>
            )}
          </div>
          <div className="top-actions">
            <button
              className="done-btn theme-btn"
              onClick={() => setTheme((value) => (value === 'dark' ? 'light' : 'dark'))}
              type="button"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              {theme === 'dark' ? 'Light' : 'Dark'}
            </button>
            {view !== 'glossary' && (
              <>
                <button className="icon-btn" onClick={() => moveLesson(-1)} type="button" aria-label="Lecția anterioară">
                  <ChevronLeft size={20} />
                </button>
                <button className="icon-btn" onClick={() => moveLesson(1)} type="button" aria-label="Lecția următoare">
                  <ChevronRight size={20} />
                </button>
                <button className={`done-btn ${completed[activeLesson.id] ? 'done' : ''}`} onClick={toggleDone} type="button">
                  <ClipboardCheck size={18} />
                  {completed[activeLesson.id] ? 'Recapitulat' : 'Marchează'}
                </button>
              </>
            )}
          </div>
        </header>

        {view === 'glossary' ? (
          <Glossary query={glossaryQuery} setQuery={setGlossaryQuery} />
        ) : (
          <>
            <div className="mode-switch" role="tablist" aria-label="Mod studiu">
              {[
                ['learn', BookOpen, 'Lecție'],
                ['flash', Brain, 'Carduri'],
                ['quiz', Target, 'Quiz'],
                ['exam', Sparkles, 'Examen'],
              ].map(([id, Icon, label]) => (
                <button className={mode === id ? 'selected' : ''} key={id} onClick={() => setMode(id)} type="button">
                  <Icon size={17} />
                  {label}
                </button>
              ))}
            </div>

            {mode === 'learn' && <LessonView lesson={activeLesson} />}
            {mode === 'flash' && (
              <Flashcards
                card={card}
                count={currentCards.length}
                flipped={flipped}
                index={flashIndex}
                onFlip={() => setFlipped((value) => !value)}
                onNext={() => {
                  setFlashIndex((value) => (value + 1) % currentCards.length);
                  setFlipped(false);
                }}
                onPrev={() => {
                  setFlashIndex((value) => (value - 1 + currentCards.length) % currentCards.length);
                  setFlipped(false);
                }}
              />
            )}
            {mode === 'quiz' && <Quiz lesson={activeLesson} answers={answers} setAnswers={setAnswers} />}
            {mode === 'exam' && <ExamReview />}
          </>
        )}
      </section>
    </main>
  );
}

function Glossary({ query, setQuery }) {
  const allTerms = useMemo(
    () =>
      lessons.flatMap((lesson) =>
        lesson.details.map((detail) => ({
          term: detail.term,
          body: detail.body,
          lessonTitle: lesson.title,
          lessonColor: lesson.color,
          lessonId: lesson.id,
        })),
      ),
    [],
  );

  const trimmed = query.toLowerCase().trim();
  const filtered = trimmed ? allTerms.filter((item) => `${item.term} ${item.body}`.toLowerCase().includes(trimmed)) : null;

  return (
    <div className="glossary">
      <label className="glossary-search">
        <Search size={18} />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Caută termen sau definiție..."
          type="search"
          autoFocus
        />
        {query && (
          <button className="glossary-clear" onClick={() => setQuery('')} type="button" aria-label="Șterge căutarea">
            <X size={16} />
          </button>
        )}
      </label>

      {filtered ? (
        filtered.length > 0 ? (
          <div className="glossary-grid">
            {filtered.map((item) => (
              <article className="glossary-card" key={`${item.lessonId}-${item.term}`}>
                <span className="glossary-badge" style={{ background: item.lessonColor }}>
                  {item.lessonTitle}
                </span>
                <h3>{item.term}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        ) : (
          <p className="glossary-empty">Niciun termen găsit pentru „{query}".</p>
        )
      ) : (
        <div className="glossary-groups">
          {lessons.map((lesson) => (
            <section key={lesson.id} className="glossary-group" style={{ '--accent': lesson.color }}>
              <div className="glossary-group-header">
                <span className="lesson-dot" style={{ background: lesson.color }} />
                <h2>{lesson.title}</h2>
                <small>{lesson.kicker}</small>
              </div>
              <div className="glossary-grid">
                {lesson.details.map((detail) => (
                  <article className="glossary-card" key={detail.term}>
                    <h3>{detail.term}</h3>
                    <p>{detail.body}</p>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}

function LessonView({ lesson }) {
  return (
    <div className="lesson-grid">
      <article className="lesson-main">
        <p className="summary">{lesson.summary}</p>
        <MiniDiagram type={lesson.diagram} color={lesson.color} />

        <section>
          <h2>Idei Cheie</h2>
          <div className="idea-list">
            {lesson.keyIdeas.map((idea) => (
              <div className="idea" key={idea}>
                <span />
                <p>{idea}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>Termeni</h2>
          <div className="terms">
            {lesson.details.map((detail) => (
              <article className="term-card" key={detail.term}>
                <h3>{detail.term}</h3>
                <p>{detail.body}</p>
              </article>
            ))}
          </div>
        </section>
      </article>

      <aside className="study-panel">
        <h2>Auto-verificare</h2>
        {lesson.check.map((item) => (
          <label className="check-row" key={item}>
            <input type="checkbox" />
            <span>{item}</span>
          </label>
        ))}
      </aside>
    </div>
  );
}

function Flashcards({ card, count, flipped, index, onFlip, onNext, onPrev }) {
  return (
    <div className="flash-layout">
      <div className={`flash-card ${flipped ? 'flipped' : ''}`} onClick={onFlip} role="button" tabIndex={0}>
        <span>{card.lesson ?? 'Card curent'}</span>
        <p>{flipped ? card.back : card.front}</p>
      </div>
      <div className="flash-controls">
        <button className="icon-btn" onClick={onPrev} type="button" aria-label="Card anterior">
          <ChevronLeft size={20} />
        </button>
        <strong>
          {index + 1} / {count}
        </strong>
        <button className="icon-btn" onClick={onNext} type="button" aria-label="Card următor">
          <ChevronRight size={20} />
        </button>
        <button className="done-btn" onClick={onFlip} type="button">
          <RotateCcw size={18} />
          Întoarce
        </button>
      </div>
    </div>
  );
}

function getSeed(text) {
  let hash = 2166136261;
  for (let index = 0; index < text.length; index += 1) {
    hash ^= text.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function getShuffledQuestion(question, seedText) {
  const options = question.options.map((text, originalIndex) => ({ text, originalIndex }));
  let seed = getSeed(seedText);

  for (let index = options.length - 1; index > 0; index -= 1) {
    seed = Math.imul(seed, 1664525) + 1013904223;
    const swapIndex = (seed >>> 0) % (index + 1);
    [options[index], options[swapIndex]] = [options[swapIndex], options[index]];
  }

  const targetCorrectIndex = getSeed(`${seedText}-correct`) % options.length;
  const currentCorrectIndex = options.findIndex((option) => option.originalIndex === question.answer);
  [options[targetCorrectIndex], options[currentCorrectIndex]] = [options[currentCorrectIndex], options[targetCorrectIndex]];

  return {
    ...question,
    options,
    correctIndex: targetCorrectIndex,
  };
}

function Quiz({ lesson, answers, setAnswers }) {
  const quizItems = useMemo(
    () => lesson.quiz.map((question, index) => getShuffledQuestion(question, `${lesson.id}-${index}`)),
    [lesson],
  );
  const score = quizItems.filter((question, index) => answers[index] === question.correctIndex).length;
  const finished = Object.keys(answers).length === quizItems.length;

  return (
    <div className="quiz">
      <div className="quiz-head">
        <div>
          <span className="eyebrow">Verificare</span>
          <h2>{lesson.title}</h2>
        </div>
        <strong>
          {score}/{quizItems.length}
        </strong>
      </div>

      {quizItems.map((question, questionIndex) => (
        <article className="question" key={question.question}>
          <h3>{question.question}</h3>
          <div className="options">
            {question.options.map((option, optionIndex) => {
              const selected = answers[questionIndex] === optionIndex;
              const answered = answers[questionIndex] !== undefined;
              const correct = optionIndex === question.correctIndex;
              return (
                <button
                  className={`${selected ? 'selected' : ''} ${answered && correct ? 'correct' : ''} ${
                    answered && selected && !correct ? 'wrong' : ''
                  }`}
                  key={option.text}
                  onClick={() => setAnswers((current) => ({ ...current, [questionIndex]: optionIndex }))}
                  type="button"
                >
                  {option.text}
                </button>
              );
            })}
          </div>
        </article>
      ))}

      {finished && (
        <div className="result">
          <strong>{score === quizItems.length ? 'Perfect.' : 'Mai merge o tură scurtă.'}</strong>
          <span>
            {score === quizItems.length
              ? 'Capitolul acesta stă bine.'
              : 'Revino la termenii marcați și refă întrebările.'}
          </span>
          <button className="done-btn" onClick={() => setAnswers({})} type="button">
            <RotateCcw size={18} />
            Reset quiz
          </button>
        </div>
      )}
    </div>
  );
}

function ExamReview() {
  return (
    <div className="exam">
      <section className="exam-hero">
        <span className="eyebrow">Recapitulare finală</span>
        <h2>Fișa scurtă pentru AMS</h2>
        <p>
          Dacă poți explica fiecare rând cu un exemplu, cursul este deja în mână. Accentul la examen va fi pe
          recunoașterea simbolurilor și pe alegerea diagramei potrivite pentru situație.
        </p>
      </section>
      <div className="exam-list">
        {examChecklist.map((item, index) => (
          <article key={item}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <p>{item}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

function MiniDiagram({ type, color }) {
  const commonStyle = { '--accent': color };

  if (type === 'entities') {
    return (
      <div className="mini-diagram entities" style={commonStyle}>
        <div className="uml-class">
          <b>Clasă</b>
          <span>atribute</span>
          <span>metode()</span>
        </div>
        <div className="uml-use">Caz utilizare</div>
        <div className="uml-note">Note</div>
        <div className="uml-node">Nod</div>
      </div>
    );
  }

  if (type === 'relations') {
    return (
      <div className="mini-diagram relations" style={commonStyle}>
        <div className="box">Client</div>
        <div className="line dashed" />
        <div className="box">Serviciu</div>
        <div className="box lower">Întreg</div>
        <div className="line solid diamond" />
        <div className="box lower">Parte</div>
      </div>
    );
  }

  if (type === 'useCase') {
    return (
      <div className="mini-diagram use-case" style={commonStyle}>
        <div className="actor" />
        <div className="system-boundary">
          <div>Autentifică</div>
          <div>Procesează</div>
        </div>
      </div>
    );
  }

  if (type === 'sequence') {
    return (
      <div className="mini-diagram sequence" style={commonStyle}>
        {['Client', 'ATM', 'Cont'].map((name) => (
          <div className="life" key={name}>
            <b>{name}</b>
            <span />
          </div>
        ))}
        <i className="msg one">PIN</i>
        <i className="msg two">verifică()</i>
        <i className="msg three">return</i>
      </div>
    );
  }

  if (type === 'collaboration') {
    return (
      <div className="mini-diagram collaboration" style={commonStyle}>
        <div>1: cere</div>
        <div>2: verifică</div>
        <div>3: răspunde</div>
        <span className="link a" />
        <span className="link b" />
      </div>
    );
  }

  if (type === 'class') {
    return (
      <div className="mini-diagram class-diagram" style={commonStyle}>
        <div className="uml-class wide">
          <b>Student</b>
          <span>- nume: String</span>
          <span>+ înscrie()</span>
        </div>
        <div className="inherit" />
        <div className="uml-class compact">
          <b>Persoană</b>
        </div>
      </div>
    );
  }

  if (type === 'activity') {
    return (
      <div className="mini-diagram activity" style={commonStyle}>
        <span className="start" />
        <div>Primește cerere</div>
        <b />
        <div>Verifică</div>
        <div>Aprobă</div>
        <span className="end" />
      </div>
    );
  }

  return (
    <div className="mini-diagram component" style={commonStyle}>
      <div className="component-box">«library» Core.dll</div>
      <div className="interface-dot">I</div>
      <div className="component-box">«executable» App.exe</div>
    </div>
  );
}

export default App;
