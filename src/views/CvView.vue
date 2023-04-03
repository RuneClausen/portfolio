<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  data() {
    return {};
  },
  methods: {},
  computed: {},
  watch: {},
  mounted() {
  }
});
</script>

<template>
  <div class="row my-4">
    <div class="container">
      <div class="row mb-5">
        <div class="col-1 border-bottom border-primary border-5 negMar"></div>
        <div class="col-11 display-6 text-primary">Education</div>
        <div class="w-100"></div>
        <div class="col-1">2023</div>
        <div class="col-11"><b>SCRUM Master Certified Course</b>, <i>Teknologisk Institut</i>, Aarhus</div>
        <div class="w-100"></div>
        <div class="col-1">2014-2017</div>
        <div class="col-11"><b>Cand.scient. Computer Science</b>, <i>University of Southern Denmark</i>, Odense</div>
        <div class="w-100 mb-1"></div>
        <div class="col-1">2011-2014</div>
        <div class="col-11"><b>Bach.scient. Computer Science</b>, <i>University of Southern Denmark</i>, Odense</div>
      </div>

      <div class="row mb-5">
        <div class="col-1 border-bottom border-primary border-5 negMar"></div>
        <div class="col-11 display-6 text-primary">Master Thesis</div>
        <div class="w-100"></div>
        <div class="col-1">title</div>
        <div class="col-11"><i>Breath-analysis.net: A comprehensive online breathomics platform</i></div>
        <div class="w-100 mb-1"></div>
        <div class="col-1">supervisors</div>
        <div class="col-11">Prof. Dr. Jan Baumbach, Ph.D. Markus List, Anne-Christin Hauschild & Anders Christiansen</div>
        <div class="w-100 mb-1"></div>
        <div class="col-1">brief description</div>
        <div class="col-11">Implementation of a web-application to perform a full pipeline of breath-analysis tasks, from uploading raw-data,
          peak-extraction, noise removal, application of various machine learning algorithms to extract meaningful data, and performing of classifications on the resulting data
          in the attempt to identify new Volatile Organic Compounds as potential markers of breath-based diseases.</div>
      </div>

      <div class="row mb-5">
        <div class="col-1 border-bottom border-primary border-5 negMar"></div>
        <div class="col-11 display-6 text-primary">Work Experience</div>
        <div class="w-100"></div>
        <div class="col-1">2021 - Now</div>
        <div class="col-11"><b>Software Developer</b>, <i>Bankdata</i> (Aarhus)</div>
        <div class="w-100 mb-1"></div>
        <div class="col-1"></div>
        <div class="col-11">Internal relocation to the Aarhus branch, joining the mortgage agreement team in the mortgage solutions area.
        Working as a full-stack developer with the primary technologies used being Java, Angular and TypeScript. The primary job function being
        developing and maintaining the next generation of mortgage loan tools for bank advisors. Also maintaining a few COBOL tasks for the team,
        such as GDPR handling and database upkeep. Active participation in the conversion of Almindelig Brand Bank into Sydbank in 2021.</div>
        <div class="w-100 mb-1"></div>
        <div class="col-1">2017 - 2021</div>
        <div class="col-11"><b>Software Developer</b>, <i>Bankdata</i> (Fredericia)</div>
        <div class="w-100 mb-1"></div>
        <div class="col-1">2015 - 2016</div>
        <div class="col-11"><b>Teaching Assistant</b>, <i>University of Southern Denmark</i></div>
        <div class="w-100 mb-1"></div>
        <div class="col-1">2014 - 2017</div>
        <div class="col-11"><b>Study Group Supervisor</b>, <i>University of Southern Denmark</i></div>
      </div>

      <div class="row mb-5">
        <div class="col-1 border-bottom border-primary border-5 negMar"></div>
        <div class="col-11 display-6 text-primary">Volunteer Work</div>
        <div class="w-100"></div>
        <div class="col-1">2023 - Now</div>
        <div class="col-11"><b>Board member</b>, <i>Aarhus Fremad Atletik</i></div>
        <div class="w-100 mb-1"></div>
        <div class="col-1">2022 - Now</div>
        <div class="col-11"><b>Member of event commitee</b>, <i>Aarhus Fremad Atletik</i></div>
        <div class="w-100 mb-1"></div>
        <div class="col-1">2018 - 2019</div>
        <div class="col-11"><b>Volunteer & activity lead</b>, <i>Danish Red Cross Youth</i>, Fredericia</div>
        <div class="w-100 mb-1"></div>
        <div class="col-1">2015 - 2016</div>
        <div class="col-11"><b>Mentor & play-buddy</b>, <i>Organization "2 Timer Om Ugen"</i>, Odense</div>
        <div class="w-100 mb-1"></div>
        <div class="col-1">2014</div>
        <div class="col-11"><b>IT-Support</b>, <i>Roskilde Festival</i></div>
      </div>

      <div class="row mb-5">
        <div class="col-1 border-bottom border-primary border-5 negMar"></div>
        <div class="col-11 display-6 text-primary">Technical Qualifications</div>
        <div class="w-100"></div>
        <div class="col-1">basic</div>
        <div class="col-11">C, Haskell, Prolog, Assembly, Docker, Grafana, Helidon, Jaeger, Quarkus, Openshift, Flask, Vue</div>
        <div class="w-100 mb-1"></div>
        <div class="col-1">intermediate</div>
        <div class="col-11">Angular, TypeScript, Python, SQL, git, LaTeX, PHP, HTML, CSS, Bootstrap, Splunk, Bash</div>
        <div class="w-100 mb-1"></div>
        <div class="col-1">advanced</div>
        <div class="col-11">Java, COBOL, ADBL, IBM 3270</div>
      </div>

      <div class="row mb-5">
        <div class="col-1 border-bottom border-primary border-5 negMar"></div>
        <div class="col-11 display-6 text-primary">Languages</div>
        <div class="w-100"></div>
        <div class="col-1">native</div>
        <div class="col-11">Danish</div>
        <div class="w-100 mb-1"></div>
        <div class="col-1">fluent</div>
        <div class="col-11">English</div>
        <div class="w-100 mb-1"></div>
        <div class="col-1">beginner</div>
        <div class="col-11">German, Norwegian, Farsi</div>
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
.negMar {
  margin-bottom: 1rem;
}
</style>
