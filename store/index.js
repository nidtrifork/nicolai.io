import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

const plugins = []

if (process.env.VUE_ENV === 'client') {
  plugins.push(createPersistedState())
}

const createStore = () => {
  return new Vuex.Store({
    plugins,
    state: {
      projects: [
        {
          "name": "fairstart",
          "title": "Fairstart Foundation Offline Application",
          "short_description": "Offline course application for Mac and Windows",
          "image": "1.png",
          "images": [
            "1.png",
            "2.png",
            "3.png"
          ],
          "description": "<p>Leverage social media hackathon mass market responsive web design hypotheses. Market buyer iPhone niche market long tail partnership strategy. Virality low hanging fruit social proof leverage. </p><p>IPad strategy analytics niche market iPhone android leverage agile development hypotheses supply chain rockstar. Advisor agile development virality investor bootstrapping value proposition. </p><p>Partnership network effects interaction design holy grail hackathon founders business model canvas accelerator market non-disclosure agreement. Business-to-business facebook ownership partner network stealth sales incubator backing direct mailing lean startup. Low hanging fruit leverage ramen twitter assets beta stealth research & development deployment innovator direct mailing pivot disruptive churn rate. Creative advisor pivot. User experience buzz seed money backing iPad.</p>"
        },
        {
          "name": "emoyeni",
          "title": "Emoyeni",
          "short_description": "USSD codes made easy",
          "image": "3.png",
          "images": [
            "3.png"
          ],
          "description": "Pitch stock direct mailing angel investor market. Ecosystem buzz crowdfunding learning curve success low hanging fruit infrastructure. Bootstrapping business-to-consumer handshake twitter paradigm shift buyer angel investor branding ramen accelerator. Value proposition market user experience validation freemium long tail. Social proof branding funding success strategy analytics stock crowdsource rockstar bandwidth business plan entrepreneur focus. Leverage research & development advisor buzz crowdsource non-disclosure agreement investor. Network effects rockstar customer investor interaction design strategy prototype A/B testing holy grail. Business-to-consumer series A financing iPad niche market market stock return on investment. Sales direct mailing value proposition focus. Learning curve paradigm shift investor deployment founders."
        },
        {
          "name": "waterford",
          "title": "Waterford Kamhlaba",
          "short_description": "The official website for Waterford Kamhlaba UWCSA",
          "image": "1.png",
          "images": [
            "1.png",
            "2.png",
            "3.png"
          ],
          "description": "<p>Leverage social media hackathon mass market responsive web design hypotheses. Market buyer iPhone niche market long tail partnership strategy. Virality low hanging fruit social proof leverage. </p><p>IPad strategy analytics niche market iPhone android leverage agile development hypotheses supply chain rockstar. Advisor agile development virality investor bootstrapping value proposition. </p><p>Partnership network effects interaction design holy grail hackathon founders business model canvas accelerator market non-disclosure agreement. Business-to-business facebook ownership partner network stealth sales incubator backing direct mailing lean startup. Low hanging fruit leverage ramen twitter assets beta stealth research & development deployment innovator direct mailing pivot disruptive churn rate. Creative advisor pivot. User experience buzz seed money backing iPad.</p>"
        }
      ]
    },
    mutations: {
      'set_projects': (state, projects) => {
        state.projects = projects
      }
    },
    actions: {
      'get_projects': async (context) => {
        const res = await fetch('/static/projects/projects.json')
        const projects_json = await res.json()
        context.commit('set_projects', projects_json)
      }
    }
  })
}

export default createStore