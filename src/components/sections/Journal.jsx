import journal from "../../data/journal";
import { useTranslation } from "react-i18next";
import "./Journal.css";

function Journal() {

  const { t } = useTranslation();

  return (
    <section id="journal" className="journal">

      <div className="journal-header">

        <span className="journal-tag">
          {t("journal.tag")}
        </span>

        <h2>
          {t("journal.title")}
        </h2>

        <p>
          {t("journal.description")}
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
      {t(entry.categoryKey)}
    </span>

  </div>

  <h3>
    {t(entry.titleKey)}
  </h3>

  <p>
    {t(entry.contentKey)}
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