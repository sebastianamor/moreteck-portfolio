import journal from "../../data/journal";
import "./Journal.css";

function Journal() {
  return (
    <section id="journal" className="journal">

      <div className="journal-header">

        <span className="journal-tag">
          &gt; DEV_JOURNAL.exe
        </span>

        <h2>
          Developer Journal
        </h2>

        <p>
          Notes, ideas and thoughts collected
          along the journey.
        </p>

      </div>


      <div className="journal-list">

        {journal.map((entry) => (

          <article
            className="journal-entry"
            key={entry.id}
          >

            <div className="journal-entry-top">

              <span className="journal-date">
                {entry.date}
              </span>

              <span className="journal-category">
                {entry.category}
              </span>

            </div>


            <h3>
              {entry.title}
            </h3>


            <p>
              {entry.content}
            </p>


            <div className="journal-tags">

              {entry.tags.map((tag) => (
                <span key={tag}>
                  #{tag}
                </span>
              ))}

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}

export default Journal;