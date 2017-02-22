'use strict';

var defaultEnvConfig = require('./default');

module.exports = {
  db: {
    uri: process.env.MONGOHQ_URL || process.env.MONGODB_URI || 'mongodb://' + (process.env.DB_1_PORT_27017_TCP_ADDR || 'localhost') + '/etraining-test',
    options: {
      user: '',
      pass: ''
    },
    // Enable mongoose debug mode
    debug: process.env.MONGODB_DEBUG || false
  },
  log: {
    // logging with Morgan - https://github.com/expressjs/morgan
    // Can specify one of 'combined', 'common', 'dev', 'short', 'tiny'
    // format: 'dev'
    // fileLogger: {
    //   directoryPath: process.cwd(),
    //   fileName: 'app.log',
    //   maxsize: 10485760,
    //   maxFiles: 2,
    //   json: false
    // }
  },
  port: process.env.PORT || 3001,
  app: {
    title: defaultEnvConfig.app.title + ' - Test Environment'
  },
  uploads: {
    profile: {
      image: {
        dest: './modules/users/client/img/profile/uploads/',
        limits: {
          fileSize: 100000 // Limit filesize (100kb) for testing purposes
        }
      }
    }
  },
  facebook: {
    clientID: process.env.FACEBOOK_ID || 'APP_ID',
    clientSecret: process.env.FACEBOOK_SECRET || 'APP_SECRET',
    callbackURL: '/api/auth/facebook/callback'
  },
  twitter: {
    username: '@TWITTER_USERNAME',
    clientID: process.env.TWITTER_KEY || 'CONSUMER_KEY',
    clientSecret: process.env.TWITTER_SECRET || 'CONSUMER_SECRET',
    callbackURL: '/api/auth/twitter/callback'
  },
  google: {
    clientID: process.env.GOOGLE_ID || 'APP_ID',
    clientSecret: process.env.GOOGLE_SECRET || 'APP_SECRET',
    callbackURL: '/api/auth/google/callback'
  },
  linkedin: {
    clientID: process.env.LINKEDIN_ID || 'APP_ID',
    clientSecret: process.env.LINKEDIN_SECRET || 'APP_SECRET',
    callbackURL: '/api/auth/linkedin/callback'
  },
  github: {
    clientID: process.env.GITHUB_ID || 'APP_ID',
    clientSecret: process.env.GITHUB_SECRET || 'APP_SECRET',
    callbackURL: '/api/auth/github/callback'
  },
  paypal: {
    clientID: process.env.PAYPAL_ID || 'CLIENT_ID',
    clientSecret: process.env.PAYPAL_SECRET || 'CLIENT_SECRET',
    callbackURL: '/api/auth/paypal/callback',
    sandbox: true
  },
  mailer: {
      from: 'contact@vietinterview.com',
      options: {
          auth: {
              user: 'contact@vietinterview.com',
              pass: 'Tc!@#6102'
            },
        port: 25,
        host: 'vietinterview.com',
        secure:false,
        tls: {rejectUnauthorized: false},
        ignoreTLS:false,
        debug:true
      }
    },
  seedDB: {
    seed:true,
    options: {
      logResults: process.env.MONGO_SEED_LOG_RESULTS !== 'false',
      seedUser: {
        username: process.env.MONGO_SEED_USER_USERNAME || 'seeduser',
        provider: 'local',
        email: process.env.MONGO_SEED_USER_EMAIL || 'user@localhost.com',
        firstName: 'User',
        lastName: 'Local',
        displayName: 'User Local',
        roles: ['user']
      },
      seedAdmin: {
        username: process.env.MONGO_SEED_ADMIN_USERNAME || 'seedadmin',
        provider: 'local',
        email: process.env.MONGO_SEED_ADMIN_EMAIL || 'admin@localhost.com',
        firstName: 'Admin',
        lastName: 'Local',
        displayName: 'Admin Local',
        roles: ['user', 'admin']
      },
      settings: [
                 {
                     name:'contactEmail',
                     value:'',
                     code:'CONTACT_EMAIL',
                     category:'system'
                  },
                  {
                      name:'registerMode',
                      value:'open',
                      code:'REGISTER_MODE',
                      category:'system'
                   }
                  ,{
                      name:'maxLoginAttempt',
                      value:'6',
                      code:'MAX_LOGIN_ATTEMPT',
                      category:'system'
                   },
                   {
                       name:'concurrentLogin',
                       value:'true',
                       code:'CONCURRENT_LOGIN',
                       category:'system'
                    },
                   {
                       name:'vietInterviewConferenceApiAdminUrl',
                       value:'',
                       code:'BUILT_INT_CONFERENCE_ADMIN_API',
                       category:'conference'
                    },
                    {
                        name:'vietInterviewConferenceApiUrl',
                        value:'',
                        code:'BUILT_INT_CONFERENCE_API',
                        category:'conference'
                     },
                     {
                         name:'vietInterviewConferenceApiSalt',
                         value:'',
                         code:'BUILT_INT_CONFERENCE_API_SALT',
                         category:'conference'
                      },
                      {
                          name:'alertUserCreate',
                          edit: true,
                          type:'Boolean',
                          valueBoolean:true,
                          code:'ALERT_USER_CREATE',
                          category:'alert'
                       },
                       {
                           name:'alertUserUpdated',
                           edit: true,
                           type:'Boolean',
                           valueBoolean:false,
                           code:'ALERT_USER_UPDATE',
                           category:'alert'
                        },
                        {
                            name:'alertUserDelete',
                            edit: true,
                            type:'Boolean',
                            valueBoolean:true,
                            code:'ALERT_USER_DELETE',
                            category:'alert'
                         },
                         {
                             name:'alertMemberEnroll',
                             edit: true,
                             type:'Boolean',
                             valueBoolean:true,
                             code:'ALERT_MEMBER_ENROLL',
                             category:'alert'
                          },
                          {
                              name:'alertMemberWithdraw',
                              edit: true,
                              type:'Boolean',
                              valueBoolean:true,
                              code:'ALERT_MEMBER_WIDTHDRAW',
                              category:'alert'
                           },
                           {
                               name:'alertMemberComplete',
                               edit: true,
                               type:'Boolean',
                               valueBoolean:true,
                               code:'ALERT_MEMBER_COMPLETE',
                               category:'alert'
                            },
                            {
                                name:'alertCourseUpdate',
                                edit: true,
                                type:'Boolean',
                                valueBoolean:true,
                                code:'ALERT_COURSE_UPDATE',
                                category:'alert'
                             },
                             {
                                 name:'alertThreadNew',
                                 edit: true,
                                 type:'Boolean',
                                 valueBoolean:true,
                                 code:'ALERT_THREAD_NEW',
                                 category:'alert'
                              },
                              {
                                  name:'alertReplyNew',
                                  edit: true,
                                  type:'Boolean',
                                  valueBoolean:true,
                                  code:'ALERT_REPLY_NEW',
                                  category:'alert'
                               },
                               {
                                   name:'alertCourseMaterialUpdate',
                                   edit: true,
                                   type:'Boolean',
                                   valueBoolean:true,
                                   code:'ALERT_COURSE_MATERIAL_UPDATE',
                                   category:'alert'
                                }
             ]
    }
  }
};