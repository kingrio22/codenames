import React, { useEffect } from "react";
import styles from "./hana.module.scss";
import { Background } from "../../container/background/background";
import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "../../config/api.config";

export const Hana = () => {
  useEffect(() => {
    sendPing();
  });
  return (
    <div>
      <Background />
      <div className={styles.Wrapper}>
        <div className={styles.TextBoxWrapper}>
          <div className={styles.TextBox}>
            Hey,
            <p>
              Ich weis nicht ob das jetzt hart verzweifelt wirkt, unangebracht
              ist, oder das Richtige ist, zu versuchen das mit dir nicht so zu
              belassen. Ich bin generell kein Mensch der im Streit auseinander
              gehen will, auch wenn wir uns grad mal seit zwei Wochen kennen.
              Btw. haben uns gestern nicht mal zum zweiwöchigen gratuliert. Spaß
              beiseite..{" "}
            </p>
            <p>
              Ich finds wirklich sehr schade, wie sich das entwickelt hat, vor
              allem weil das Streitthema war, wann wir uns sehen können. Wenn
              man das auf Makro Ebene betrachtet, ist es einfach komplett
              sinnlos das dann so eskalieren zu lassen, aber dazu haben wir
              beide unseren Teil beigetragen. Am Montag als wir telefoniert
              haben, war es für mich eigentlich sicher, dass wir uns dieses Jahr
              noch sehen würden, es ging nur um die Frage wann. Vor allem weil
              wir beide die Zeit gehabt hätten und keiner von uns hätte arbeiten
              müssen.{" "}
            </p>
            <p>
              Als wir dann am Mittwoch darüber geschrieben haben, hat sich das
              bei dir aber auf einmal ganz anders angehört und ich konnte mit
              der Situation nicht entsprechend umgehen. Ich kann bei sowas wie
              ein kleines Kind werden, dem man sein Lieblingsspielzeug ohne
              Grund wegnimmt und so hat sich das angefühlt. Soll nur ne Metapher
              sein, ich seh dich natürlich nicht als Spielzeug an, auch wenn man
              es mit Zweideutigkeit darauf ummünzen könnte, aber das möchte ich
              hier jetzt mal rauslassen.
            </p>
            <p>
              Auf den Auslöser für den Streit möchte ich jetzt nicht nochmal
              eingehen, wir haben gesehen wohin das führt. Wir fühlen uns beide
              im Recht und sind beide verdammt stur. Und wenn beide auf ihrem
              Recht beharren, hat man zwar Recht, aber verliert dafür sehr viel.
            </p>
            <p>
              Dass es bei dir keine zweiten Chancen gibt, hast du auch recht
              deutlich gemacht, aber man kann zumindest versuchen, nicht so
              auseinander zu gehen finde ich und nachdem sich das Jahr dem Ende
              neigt, ist es ein guter Grund um den ersten Schritt zu machen, um
              den Groll nicht ins neue Jahr zu nehmen. Auch wenn wir uns nur
              paar Tage kennen und du vielleicht schon damit abgeschlossen hast,
              kann ich das nicht so einfach. Zeit ist relativ und wenn die
              Sympathie stimmt, können auch ein paar Tage sich sehr schnell wie
              eine lange Zeit anfühlen. Und in den meisten Sachen waren wir
              einfach 100% auf einer Wellenlänge, sonst hätten wir uns nicht
              immer stundenlang was zu erzählen gehabt, nachdem wir eh schon den
              ganzen Tag miteinander geschrieben haben. Und uns zusätzlich auch
              noch für den nächsten Tag gefoltert, weil ausreichend Schlaf
              nebensächlich geworden ist.
            </p>
            <p>
              Solche Bekanntschaften macht man nicht alltäglich und wenn man
              überlegt wie wir uns kennengelernt haben klingt es nur noch umso
              absurder, das es überhaupt soweit gekommen ist, dass man sich
              unbedingt treffen möchte.
            </p>
            <p>
              Du hast mir in nem ausführlichen Text die negativen Seiten deines
              Charakters erklärt und sich selber so gut zu kennen, zeugt von
              Stärke, es einer quasi wildfremden Person zu erzählen, zeugt von
              Mut. Hättest du es nicht gemacht, würde ich diesen Text
              wahrscheinlich jetzt nicht schreiben. Ich habs zwar schon
              gelöscht, aber kann mich noch dran erinnern, dass du sehr stur
              bist und du nicht die Person bist, die auf jemand anderen zugeht,
              auch wenn du es eigentlich gern machen würdest. Ob du es jetzt
              einfach nicht willst, kann ich nicht einordnen, dafür kennen wir
              uns zu kurz.
            </p>
            <p>
              Nachdem wir kein Verhältnis in irgendeiner Weise haben, das das
              rechtfertigen würde, dass du deinen inneren Schweinhund dafür
              überwindest, rechne ich auch nicht damit, nochmal irgendwas von
              dir zu hören. Ich wollte das aber noch loswerden und finde es
              wirklich schade, wie wir auseinander gegangen sind und das wir es
              überhaupt gemacht haben und das noch wegen so einem dummen
              Streitgrund.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function sendPing() {
  try {
    const options: AxiosRequestConfig = {
      url: `${BASE_URL}/ping`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };

    return await axios.request(options);
  } catch (err) {
    console.log(err);
    throw new Error();
  }
}
