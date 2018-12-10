/**
 * author Oleg .
 */

const mongoose = require ( '../connection.js' ).mongoose;


const async = require ( 'async' );
const crypt = require ( '../crypto/crypto' );

//

const PeriodontalShema = mongoose.Schema ( {

    patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' },

    chart: {
        up:   {
            buccal: {
                '18': {

                    absent:    {
                        type:    'Boolean',
                        default: false,
                    },
                    mobility:  {
                        type:    'String',
                        default: 0,
                    },
                    implant:   {
                        type:    'Boolean',
                        default: false,
                    },
                    furcation: {
                        type:    'String',
                        default: '0',
                    },
                    bleeding:  {
                        '1': {
                            type:    'String',
                            default: false,
                        },
                        '2': {
                            type:    'String',
                            default: false,
                        },
                        '3': {
                            type:    'String',
                            default: false,
                        },
                    },
                    pluc:      {
                        type:    'String',
                        default: '0',
                    },
                    margin:    {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                    depth:     {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                },
                '17': {
                    absent:    {
                        type:    'Boolean',
                        default: false,
                    },
                    mobility:  {
                        type:    'String',
                        default: 0,
                    },
                    implant:   {
                        type:    'Boolean',
                        default: false,
                    },
                    furcation: {
                        type:    'String',
                        default: '0',
                    },
                    bleeding:  {
                        '1': {
                            type:    'String',
                            default: false,
                        },
                        '2': {
                            type:    'String',
                            default: false,
                        },
                        '3': {
                            type:    'String',
                            default: false,
                        },
                    },
                    pluc:      {
                        type:    'String',
                        default: '0',
                    },
                    margin:    {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                    depth:     {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                },
                '16': {
                    absent:    {
                        type:    'Boolean',
                        default: false,
                    },
                    mobility:  {
                        type:    'String',
                        default: 0,
                    },
                    implant:   {
                        type:    'Boolean',
                        default: false,
                    },
                    furcation: {
                        type:    'String',
                        default: '0',
                    },
                    bleeding:  {
                        '1': {
                            type:    'String',
                            default: false,
                        },
                        '2': {
                            type:    'String',
                            default: false,
                        },
                        '3': {
                            type:    'String',
                            default: false,
                        },
                    },
                    pluc:      {
                        type:    'String',
                        default: '0',
                    },
                    margin:    {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                    depth:     {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                },
                '15': {
                    absent:   {
                        type:    'Boolean',
                        default: false,
                    },
                    mobility: {
                        type:    'String',
                        default: 0,
                    },
                    implant:  {
                        type:    'Boolean',
                        default: false,
                    },
                    bleeding: {
                        '1': {
                            type:    'String',
                            default: false,
                        },
                        '2': {
                            type:    'String',
                            default: false,
                        },
                        '3': {
                            type:    'String',
                            default: false,
                        },
                    },
                    pluc:     {
                        type:    'String',
                        default: '0',
                    },
                    margin:   {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                    depth:    {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                },
                '14': {
                    absent:   {
                        type:    'Boolean',
                        default: false,
                    },
                    mobility: {
                        type:    'String',
                        default: 0,
                    },
                    implant:  {
                        type:    'Boolean',
                        default: false,
                    },
                    bleeding: {
                        '1': {
                            type:    'String',
                            default: false,
                        },
                        '2': {
                            type:    'String',
                            default: false,
                        },
                        '3': {
                            type:    'String',
                            default: false,
                        },
                    },
                    pluc:     {
                        type:    'String',
                        default: '0',
                    },
                    margin:   {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                    depth:    {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                },
                '13': {
                    absent:   {
                        type:    'Boolean',
                        default: false,
                    },
                    mobility: {
                        type:    'String',
                        default: 0,
                    },
                    implant:  {
                        type:    'Boolean',
                        default: false,
                    },
                    bleeding: {
                        '1': {
                            type:    'String',
                            default: false,
                        },
                        '2': {
                            type:    'String',
                            default: false,
                        },
                        '3': {
                            type:    'String',
                            default: false,
                        },
                    },
                    pluc:     {
                        type:    'String',
                        default: '0',
                    },
                    margin:   {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                    depth:    {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                },
                '12': {
                    absent:   {
                        type:    'Boolean',
                        default: false,
                    },
                    mobility: {
                        type:    'String',
                        default: 0,
                    },
                    implant:  {
                        type:    'Boolean',
                        default: false,
                    },
                    bleeding: {
                        '1': {
                            type:    'String',
                            default: false,
                        },
                        '2': {
                            type:    'String',
                            default: false,
                        },
                        '3': {
                            type:    'String',
                            default: false,
                        },
                    },
                    pluc:     {
                        type:    'String',
                        default: '0',
                    },
                    margin:   {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                    depth:    {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                },
                '11': {
                    absent:   {
                        type:    'Boolean',
                        default: false,
                    },
                    mobility: {
                        type:    'String',
                        default: 0,
                    },
                    implant:  {
                        type:    'Boolean',
                        default: false,
                    },
                    bleeding: {
                        '1': {
                            type:    'String',
                            default: false,
                        },
                        '2': {
                            type:    'String',
                            default: false,
                        },
                        '3': {
                            type:    'String',
                            default: false,
                        },
                    },
                    pluc:     {
                        type:    'String',
                        default: '0',
                    },
                    margin:   {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                    depth:    {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                },

                '28': {
                    absent:    {
                        type:    'Boolean',
                        default: false,
                    },
                    mobility:  {
                        type:    'String',
                        default: 0,
                    },
                    implant:   {
                        type:    'Boolean',
                        default: false,
                    },
                    furcation: {
                        type:    'String',
                        default: '0',
                    },
                    bleeding:  {
                        '1': {
                            type:    'String',
                            default: false,
                        },
                        '2': {
                            type:    'String',
                            default: false,
                        },
                        '3': {
                            type:    'String',
                            default: false,
                        },
                    },
                    pluc:      {
                        type:    'String',
                        default: '0',
                    },
                    margin:    {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                    depth:     {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                },
                '27': {
                    absent:    {
                        type:    'Boolean',
                        default: false,
                    },
                    mobility:  {
                        type:    'String',
                        default: 0,
                    },
                    implant:   {
                        type:    'Boolean',
                        default: false,
                    },
                    furcation: {
                        type:    'String',
                        default: '0',
                    },
                    bleeding:  {
                        '1': {
                            type:    'String',
                            default: false,
                        },
                        '2': {
                            type:    'String',
                            default: false,
                        },
                        '3': {
                            type:    'String',
                            default: false,
                        },
                    },
                    pluc:      {
                        type:    'String',
                        default: '0',
                    },
                    margin:    {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                    depth:     {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                },
                '26': {
                    absent:    {
                        type:    'Boolean',
                        default: false,
                    },
                    mobility:  {
                        type:    'String',
                        default: 0,
                    },
                    implant:   {
                        type:    'Boolean',
                        default: false,
                    },
                    furcation: {
                        type:    'String',
                        default: '0',
                    },
                    bleeding:  {
                        '1': {
                            type:    'String',
                            default: false,
                        },
                        '2': {
                            type:    'String',
                            default: false,
                        },
                        '3': {
                            type:    'String',
                            default: false,
                        },
                    },
                    pluc:      {
                        type:    'String',
                        default: '0',
                    },
                    margin:    {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                    depth:     {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                },
                '25': {
                    absent:   {
                        type:    'Boolean',
                        default: false,
                    },
                    mobility: {
                        type:    'String',
                        default: 0,
                    },
                    implant:  {
                        type:    'Boolean',
                        default: false,
                    },
                    bleeding: {
                        '1': {
                            type:    'String',
                            default: false,
                        },
                        '2': {
                            type:    'String',
                            default: false,
                        },
                        '3': {
                            type:    'String',
                            default: false,
                        },
                    },
                    pluc:     {
                        type:    'String',
                        default: '0',
                    },
                    margin:   {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                    depth:    {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                },
                '24': {
                    absent:   {
                        type:    'Boolean',
                        default: false,
                    },
                    mobility: {
                        type:    'String',
                        default: 0,
                    },
                    implant:  {
                        type:    'Boolean',
                        default: false,
                    },
                    bleeding: {
                        '1': {
                            type:    'String',
                            default: false,
                        },
                        '2': {
                            type:    'String',
                            default: false,
                        },
                        '3': {
                            type:    'String',
                            default: false,
                        },
                    },
                    pluc:     {
                        type:    'String',
                        default: '0',
                    },
                    margin:   {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                    depth:    {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                },
                '23': {
                    absent:   {
                        type:    'Boolean',
                        default: false,
                    },
                    mobility: {
                        type:    'String',
                        default: 0,
                    },
                    implant:  {
                        type:    'Boolean',
                        default: false,
                    },
                    bleeding: {
                        '1': {
                            type:    'String',
                            default: false,
                        },
                        '2': {
                            type:    'String',
                            default: false,
                        },
                        '3': {
                            type:    'String',
                            default: false,
                        },
                    },
                    pluc:     {
                        type:    'String',
                        default: '0',
                    },
                    margin:   {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                    depth:    {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                },
                '22': {
                    absent:   {
                        type:    'Boolean',
                        default: false,
                    },
                    mobility: {
                        type:    'String',
                        default: 0,
                    },
                    implant:  {
                        type:    'Boolean',
                        default: false,
                    },
                    bleeding: {
                        '1': {
                            type:    'String',
                            default: false,
                        },
                        '2': {
                            type:    'String',
                            default: false,
                        },
                        '3': {
                            type:    'String',
                            default: false,
                        },
                    },
                    pluc:     {
                        type:    'String',
                        default: '0',
                    },
                    margin:   {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                    depth:    {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                },
                '21': {
                    absent:   {
                        type:    'Boolean',
                        default: false,
                    },
                    mobility: {
                        type:    'String',
                        default: 0,
                    },
                    implant:  {
                        type:    'Boolean',
                        default: false,
                    },
                    bleeding: {
                        '1': {
                            type:    'String',
                            default: false,
                        },
                        '2': {
                            type:    'String',
                            default: false,
                        },
                        '3': {
                            type:    'String',
                            default: false,
                        },
                    },
                    pluc:     {
                        type:    'String',
                        default: '0',
                    },
                    margin:   {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                    depth:    {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                },
            },

            lingual: {
                '18': {

                    absent:    {
                        type:    'Boolean',
                        default: false,
                    },
                    mobility:  {
                        type:    'String',
                        default: 0,
                    },
                    implant:   {
                        type:    'Boolean',
                        default: false,
                    },
                    furcation: {
                        '1':{
                            type:    'String',
                            default: '0',
                        },
                        '2':{
                            type:    'String',
                            default: '0',
                        }

                    },
                    bleeding:  {
                        '1': {
                            type:    'String',
                            default: false,
                        },
                        '2': {
                            type:    'String',
                            default: false,
                        },
                        '3': {
                            type:    'String',
                            default: false,
                        },
                    },
                    pluc:      {
                        type:    'String',
                        default: '0',
                    },
                    margin:    {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                    depth:     {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                },
                '17': {
                    absent:    {
                        type:    'Boolean',
                        default: false,
                    },
                    mobility:  {
                        type:    'String',
                        default: 0,
                    },
                    implant:   {
                        type:    'Boolean',
                        default: false,
                    },
                    furcation: {
                        '1':{
                            type:    'String',
                            default: '0',
                        },
                        '2':{
                            type:    'String',
                            default: '0',
                        }
                    },
                    bleeding:  {
                        '1': {
                            type:    'String',
                            default: false,
                        },
                        '2': {
                            type:    'String',
                            default: false,
                        },
                        '3': {
                            type:    'String',
                            default: false,
                        },
                    },
                    pluc:      {
                        type:    'String',
                        default: '0',
                    },
                    margin:    {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                    depth:     {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                },
                '16': {
                    absent:    {
                        type:    'Boolean',
                        default: false,
                    },
                    mobility:  {
                        type:    'String',
                        default: 0,
                    },
                    implant:   {
                        type:    'Boolean',
                        default: false,
                    },
                    furcation: {
                        '1':{
                            type:    'String',
                            default: '0',
                        },
                        '2':{
                            type:    'String',
                            default: '0',
                        }
                    },
                    bleeding:  {
                        '1': {
                            type:    'String',
                            default: false,
                        },
                        '2': {
                            type:    'String',
                            default: false,
                        },
                        '3': {
                            type:    'String',
                            default: false,
                        },
                    },
                    pluc:      {
                        type:    'String',
                        default: '0',
                    },
                    margin:    {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                    depth:     {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                },
                '15': {
                    absent:   {
                        type:    'Boolean',
                        default: false,
                    },
                    mobility: {
                        type:    'String',
                        default: 0,
                    },
                    implant:  {
                        type:    'Boolean',
                        default: false,
                    },
                    bleeding: {
                        '1': {
                            type:    'String',
                            default: false,
                        },
                        '2': {
                            type:    'String',
                            default: false,
                        },
                        '3': {
                            type:    'String',
                            default: false,
                        },
                    },
                    pluc:     {
                        type:    'String',
                        default: '0',
                    },
                    margin:   {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                    depth:    {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                },
                '14': {
                    absent:   {
                        type:    'Boolean',
                        default: false,
                    },
                    mobility: {
                        type:    'String',
                        default: 0,
                    },
                    implant:  {
                        type:    'Boolean',
                        default: false,
                    },
                    furcation:{
                        '1':{
                            type:    'String',
                            default: '0',
                        },
                        '2':{
                            type:    'String',
                            default: '0',
                        }
                    },

                    bleeding: {
                        '1': {
                            type:    'String',
                            default: false,
                        },
                        '2': {
                            type:    'String',
                            default: false,
                        },
                        '3': {
                            type:    'String',
                            default: false,
                        },
                    },
                    pluc:     {
                        type:    'String',
                        default: '0',
                    },
                    margin:   {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                    depth:    {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                },
                '13': {
                    absent:   {
                        type:    'Boolean',
                        default: false,
                    },
                    mobility: {
                        type:    'String',
                        default: 0,
                    },
                    implant:  {
                        type:    'Boolean',
                        default: false,
                    },
                    bleeding: {
                        '1': {
                            type:    'String',
                            default: false,
                        },
                        '2': {
                            type:    'String',
                            default: false,
                        },
                        '3': {
                            type:    'String',
                            default: false,
                        },
                    },
                    pluc:     {
                        type:    'String',
                        default: '0',
                    },
                    margin:   {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                    depth:    {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                },
                '12': {
                    absent:   {
                        type:    'Boolean',
                        default: false,
                    },
                    mobility: {
                        type:    'String',
                        default: 0,
                    },
                    implant:  {
                        type:    'Boolean',
                        default: false,
                    },
                    bleeding: {
                        '1': {
                            type:    'String',
                            default: false,
                        },
                        '2': {
                            type:    'String',
                            default: false,
                        },
                        '3': {
                            type:    'String',
                            default: false,
                        },
                    },
                    pluc:     {
                        type:    'String',
                        default: '0',
                    },
                    margin:   {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                    depth:    {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                },
                '11': {
                    absent:   {
                        type:    'Boolean',
                        default: false,
                    },
                    mobility: {
                        type:    'String',
                        default: 0,
                    },
                    implant:  {
                        type:    'Boolean',
                        default: false,
                    },
                    bleeding: {
                        '1': {
                            type:    'String',
                            default: false,
                        },
                        '2': {
                            type:    'String',
                            default: false,
                        },
                        '3': {
                            type:    'String',
                            default: false,
                        },
                    },
                    pluc:     {
                        type:    'String',
                        default: '0',
                    },
                    margin:   {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                    depth:    {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                },

                '28': {
                    absent:    {
                        type:    'Boolean',
                        default: false,
                    },
                    mobility:  {
                        type:    'String',
                        default: 0,
                    },
                    implant:   {
                        type:    'Boolean',
                        default: false,
                    },
                    furcation: {
                        '1':{
                            type:    'String',
                            default: '0',
                        },
                        '2':{
                            type:    'String',
                            default: '0',
                        }
                    },
                    bleeding:  {
                        '1': {
                            type:    'String',
                            default: false,
                        },
                        '2': {
                            type:    'String',
                            default: false,
                        },
                        '3': {
                            type:    'String',
                            default: false,
                        },
                    },
                    pluc:      {
                        type:    'String',
                        default: '0',
                    },
                    margin:    {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                    depth:     {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                },
                '27': {
                    absent:    {
                        type:    'Boolean',
                        default: false,
                    },
                    mobility:  {
                        type:    'String',
                        default: 0,
                    },
                    implant:   {
                        type:    'Boolean',
                        default: false,
                    },
                    furcation: {
                        '1':{
                            type:    'String',
                            default: '0',
                        },
                        '2':{
                            type:    'String',
                            default: '0',
                        }
                    },
                    bleeding:  {
                        '1': {
                            type:    'String',
                            default: false,
                        },
                        '2': {
                            type:    'String',
                            default: false,
                        },
                        '3': {
                            type:    'String',
                            default: false,
                        },
                    },
                    pluc:      {
                        type:    'String',
                        default: '0',
                    },
                    margin:    {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                    depth:     {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                },
                '26': {
                    absent:    {
                        type:    'Boolean',
                        default: false,
                    },
                    mobility:  {
                        type:    'String',
                        default: 0,
                    },
                    implant:   {
                        type:    'Boolean',
                        default: false,
                    },
                    furcation: {
                        '1':{
                            type:    'String',
                            default: '0',
                        },
                        '2':{
                            type:    'String',
                            default: '0',
                        }
                    },
                    bleeding:  {
                        '1': {
                            type:    'String',
                            default: false,
                        },
                        '2': {
                            type:    'String',
                            default: false,
                        },
                        '3': {
                            type:    'String',
                            default: false,
                        },
                    },
                    pluc:      {
                        type:    'String',
                        default: '0',
                    },
                    margin:    {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                    depth:     {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                },
                '25': {
                    absent:   {
                        type:    'Boolean',
                        default: false,
                    },
                    mobility: {
                        type:    'String',
                        default: 0,
                    },
                    implant:  {
                        type:    'Boolean',
                        default: false,
                    },
                    bleeding: {
                        '1': {
                            type:    'String',
                            default: false,
                        },
                        '2': {
                            type:    'String',
                            default: false,
                        },
                        '3': {
                            type:    'String',
                            default: false,
                        },
                    },
                    pluc:     {
                        type:    'String',
                        default: '0',
                    },
                    margin:   {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                    depth:    {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                },
                '24': {
                    absent:   {
                        type:    'Boolean',
                        default: false,
                    },
                    mobility: {
                        type:    'String',
                        default: 0,
                    },
                    implant:  {
                        type:    'Boolean',
                        default: false,
                    },
                    furcation:{
                        '1':{
                            type:    'String',
                            default: '0',
                        },
                        '2':{
                            type:    'String',
                            default: '0',
                        }
                    },
                    bleeding: {
                        '1': {
                            type:    'String',
                            default: false,
                        },
                        '2': {
                            type:    'String',
                            default: false,
                        },
                        '3': {
                            type:    'String',
                            default: false,
                        },
                    },
                    pluc:     {
                        type:    'String',
                        default: '0',
                    },
                    margin:   {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                    depth:    {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                },
                '23': {
                    absent:   {
                        type:    'Boolean',
                        default: false,
                    },
                    mobility: {
                        type:    'String',
                        default: 0,
                    },
                    implant:  {
                        type:    'Boolean',
                        default: false,
                    },
                    bleeding: {
                        '1': {
                            type:    'String',
                            default: false,
                        },
                        '2': {
                            type:    'String',
                            default: false,
                        },
                        '3': {
                            type:    'String',
                            default: false,
                        },
                    },
                    pluc:     {
                        type:    'String',
                        default: '0',
                    },
                    margin:   {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                    depth:    {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                },
                '22': {
                    absent:   {
                        type:    'Boolean',
                        default: false,
                    },
                    mobility: {
                        type:    'String',
                        default: 0,
                    },
                    implant:  {
                        type:    'Boolean',
                        default: false,
                    },
                    bleeding: {
                        '1': {
                            type:    'String',
                            default: false,
                        },
                        '2': {
                            type:    'String',
                            default: false,
                        },
                        '3': {
                            type:    'String',
                            default: false,
                        },
                    },
                    pluc:     {
                        type:    'String',
                        default: '0',
                    },
                    margin:   {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                    depth:    {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                },
                '21': {
                    absent:   {
                        type:    'Boolean',
                        default: false,
                    },
                    mobility: {
                        type:    'String',
                        default: 0,
                    },
                    implant:  {
                        type:    'Boolean',
                        default: false,
                    },
                    bleeding: {
                        '1': {
                            type:    'String',
                            default: false,
                        },
                        '2': {
                            type:    'String',
                            default: false,
                        },
                        '3': {
                            type:    'String',
                            default: false,
                        },
                    },
                    pluc:     {
                        type:    'String',
                        default: '0',
                    },
                    margin:   {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                    depth:    {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                },
            },
        },
        down: {
            buccal: {
                '48': {

                    absent:    {
                        type:    'Boolean',
                        default: false,
                    },
                    mobility:  {
                        type:    'String',
                        default: 0,
                    },
                    implant:   {
                        type:    'Boolean',
                        default: false,
                    },
                    furcation: {
                        type:    'String',
                        default: '0',
                    },
                    bleeding:  {
                        '1': {
                            type:    'String',
                            default: false,
                        },
                        '2': {
                            type:    'String',
                            default: false,
                        },
                        '3': {
                            type:    'String',
                            default: false,
                        },
                    },
                    pluc:      {
                        type:    'String',
                        default: '0',
                    },
                    margin:    {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                    depth:     {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                },
                '47': {
                    absent:    {
                        type:    'Boolean',
                        default: false,
                    },
                    mobility:  {
                        type:    'String',
                        default: 0,
                    },
                    implant:   {
                        type:    'Boolean',
                        default: false,
                    },
                    furcation: {
                        type:    'String',
                        default: '0',
                    },
                    bleeding:  {
                        '1': {
                            type:    'String',
                            default: false,
                        },
                        '2': {
                            type:    'String',
                            default: false,
                        },
                        '3': {
                            type:    'String',
                            default: false,
                        },
                    },
                    pluc:      {
                        type:    'String',
                        default: '0',
                    },
                    margin:    {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                    depth:     {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                },
                '46': {
                    absent:    {
                        type:    'Boolean',
                        default: false,
                    },
                    mobility:  {
                        type:    'String',
                        default: 0,
                    },
                    implant:   {
                        type:    'Boolean',
                        default: false,
                    },
                    furcation: {
                        type:    'String',
                        default: '0',
                    },
                    bleeding:  {
                        '1': {
                            type:    'String',
                            default: false,
                        },
                        '2': {
                            type:    'String',
                            default: false,
                        },
                        '3': {
                            type:    'String',
                            default: false,
                        },
                    },
                    pluc:      {
                        type:    'String',
                        default: '0',
                    },
                    margin:    {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                    depth:     {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                },
                '45': {
                    absent:   {
                        type:    'Boolean',
                        default: false,
                    },
                    mobility: {
                        type:    'String',
                        default: 0,
                    },
                    implant:  {
                        type:    'Boolean',
                        default: false,
                    },
                    bleeding: {
                        '1': {
                            type:    'String',
                            default: false,
                        },
                        '2': {
                            type:    'String',
                            default: false,
                        },
                        '3': {
                            type:    'String',
                            default: false,
                        },
                    },
                    pluc:     {
                        type:    'String',
                        default: '0',
                    },
                    margin:   {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                    depth:    {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                },
                '44': {
                    absent:   {
                        type:    'Boolean',
                        default: false,
                    },
                    mobility: {
                        type:    'String',
                        default: 0,
                    },
                    implant:  {
                        type:    'Boolean',
                        default: false,
                    },
                    bleeding: {
                        '1': {
                            type:    'String',
                            default: false,
                        },
                        '2': {
                            type:    'String',
                            default: false,
                        },
                        '3': {
                            type:    'String',
                            default: false,
                        },
                    },
                    pluc:     {
                        type:    'String',
                        default: '0',
                    },
                    margin:   {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                    depth:    {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                },
                '43': {
                    absent:   {
                        type:    'Boolean',
                        default: false,
                    },
                    mobility: {
                        type:    'String',
                        default: 0,
                    },
                    implant:  {
                        type:    'Boolean',
                        default: false,
                    },
                    bleeding: {
                        '1': {
                            type:    'String',
                            default: false,
                        },
                        '2': {
                            type:    'String',
                            default: false,
                        },
                        '3': {
                            type:    'String',
                            default: false,
                        },
                    },
                    pluc:     {
                        type:    'String',
                        default: '0',
                    },
                    margin:   {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                    depth:    {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                },
                '42': {
                    absent:   {
                        type:    'Boolean',
                        default: false,
                    },
                    mobility: {
                        type:    'String',
                        default: 0,
                    },
                    implant:  {
                        type:    'Boolean',
                        default: false,
                    },
                    bleeding: {
                        '1': {
                            type:    'String',
                            default: false,
                        },
                        '2': {
                            type:    'String',
                            default: false,
                        },
                        '3': {
                            type:    'String',
                            default: false,
                        },
                    },
                    pluc:     {
                        type:    'String',
                        default: '0',
                    },
                    margin:   {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                    depth:    {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                },
                '41': {
                    absent:   {
                        type:    'Boolean',
                        default: false,
                    },
                    mobility: {
                        type:    'String',
                        default: 0,
                    },
                    implant:  {
                        type:    'Boolean',
                        default: false,
                    },
                    bleeding: {
                        '1': {
                            type:    'String',
                            default: false,
                        },
                        '2': {
                            type:    'String',
                            default: false,
                        },
                        '3': {
                            type:    'String',
                            default: false,
                        },
                    },
                    pluc:     {
                        type:    'String',
                        default: '0',
                    },
                    margin:   {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                    depth:    {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                },

                '38': {
                    absent:    {
                        type:    'Boolean',
                        default: false,
                    },
                    mobility:  {
                        type:    'String',
                        default: 0,
                    },
                    implant:   {
                        type:    'Boolean',
                        default: false,
                    },
                    furcation: {
                        type:    'String',
                        default: '0',
                    },
                    bleeding:  {
                        '1': {
                            type:    'String',
                            default: false,
                        },
                        '2': {
                            type:    'String',
                            default: false,
                        },
                        '3': {
                            type:    'String',
                            default: false,
                        },
                    },
                    pluc:      {
                        type:    'String',
                        default: '0',
                    },
                    margin:    {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                    depth:     {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                },
                '37': {
                    absent:    {
                        type:    'Boolean',
                        default: false,
                    },
                    mobility:  {
                        type:    'String',
                        default: 0,
                    },
                    implant:   {
                        type:    'Boolean',
                        default: false,
                    },
                    furcation: {
                        type:    'String',
                        default: '0',
                    },
                    bleeding:  {
                        '1': {
                            type:    'String',
                            default: false,
                        },
                        '2': {
                            type:    'String',
                            default: false,
                        },
                        '3': {
                            type:    'String',
                            default: false,
                        },
                    },
                    pluc:      {
                        type:    'String',
                        default: '0',
                    },
                    margin:    {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                    depth:     {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                },
                '36': {
                    absent:    {
                        type:    'Boolean',
                        default: false,
                    },
                    mobility:  {
                        type:    'String',
                        default: 0,
                    },
                    implant:   {
                        type:    'Boolean',
                        default: false,
                    },
                    furcation: {
                        type:    'String',
                        default: '0',
                    },
                    bleeding:  {
                        '1': {
                            type:    'String',
                            default: false,
                        },
                        '2': {
                            type:    'String',
                            default: false,
                        },
                        '3': {
                            type:    'String',
                            default: false,
                        },
                    },
                    pluc:      {
                        type:    'String',
                        default: '0',
                    },
                    margin:    {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                    depth:     {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                },
                '35': {
                    absent:   {
                        type:    'Boolean',
                        default: false,
                    },
                    mobility: {
                        type:    'String',
                        default: 0,
                    },
                    implant:  {
                        type:    'Boolean',
                        default: false,
                    },
                    bleeding: {
                        '1': {
                            type:    'String',
                            default: false,
                        },
                        '2': {
                            type:    'String',
                            default: false,
                        },
                        '3': {
                            type:    'String',
                            default: false,
                        },
                    },
                    pluc:     {
                        type:    'String',
                        default: '0',
                    },
                    margin:   {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                    depth:    {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                },
                '34': {
                    absent:   {
                        type:    'Boolean',
                        default: false,
                    },
                    mobility: {
                        type:    'String',
                        default: 0,
                    },
                    implant:  {
                        type:    'Boolean',
                        default: false,
                    },
                    bleeding: {
                        '1': {
                            type:    'String',
                            default: false,
                        },
                        '2': {
                            type:    'String',
                            default: false,
                        },
                        '3': {
                            type:    'String',
                            default: false,
                        },
                    },
                    pluc:     {
                        type:    'String',
                        default: '0',
                    },
                    margin:   {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                    depth:    {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                },
                '33': {
                    absent:   {
                        type:    'Boolean',
                        default: false,
                    },
                    mobility: {
                        type:    'String',
                        default: 0,
                    },
                    implant:  {
                        type:    'Boolean',
                        default: false,
                    },
                    bleeding: {
                        '1': {
                            type:    'String',
                            default: false,
                        },
                        '2': {
                            type:    'String',
                            default: false,
                        },
                        '3': {
                            type:    'String',
                            default: false,
                        },
                    },
                    pluc:     {
                        type:    'String',
                        default: '0',
                    },
                    margin:   {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                    depth:    {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                },
                '32': {
                    absent:   {
                        type:    'Boolean',
                        default: false,
                    },
                    mobility: {
                        type:    'String',
                        default: 0,
                    },
                    implant:  {
                        type:    'Boolean',
                        default: false,
                    },
                    bleeding: {
                        '1': {
                            type:    'String',
                            default: false,
                        },
                        '2': {
                            type:    'String',
                            default: false,
                        },
                        '3': {
                            type:    'String',
                            default: false,
                        },
                    },
                    pluc:     {
                        type:    'String',
                        default: '0',
                    },
                    margin:   {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                    depth:    {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                },
                '31': {
                    absent:   {
                        type:    'Boolean',
                        default: false,
                    },
                    mobility: {
                        type:    'String',
                        default: 0,
                    },
                    implant:  {
                        type:    'Boolean',
                        default: false,
                    },
                    bleeding: {
                        '1': {
                            type:    'String',
                            default: false,
                        },
                        '2': {
                            type:    'String',
                            default: false,
                        },
                        '3': {
                            type:    'String',
                            default: false,
                        },
                    },
                    pluc:     {
                        type:    'String',
                        default: '0',
                    },
                    margin:   {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                    depth:    {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                },
            },
            lingual: {
                '48': {

                    absent:    {
                        type:    'Boolean',
                        default: false,
                    },
                    mobility:  {
                        type:    'String',
                        default: 0,
                    },
                    implant:   {
                        type:    'Boolean',
                        default: false,
                    },
                    furcation: {
                        type:    'String',
                        default: '0',
                    },
                    bleeding:  {
                        '1': {
                            type:    'String',
                            default: false,
                        },
                        '2': {
                            type:    'String',
                            default: false,
                        },
                        '3': {
                            type:    'String',
                            default: false,
                        },
                    },
                    pluc:      {
                        type:    'String',
                        default: '0',
                    },
                    margin:    {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                    depth:     {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                },
                '47': {
                    absent:    {
                        type:    'Boolean',
                        default: false,
                    },
                    mobility:  {
                        type:    'String',
                        default: 0,
                    },
                    implant:   {
                        type:    'Boolean',
                        default: false,
                    },
                    furcation: {
                        type:    'String',
                        default: '0',
                    },
                    bleeding:  {
                        '1': {
                            type:    'String',
                            default: false,
                        },
                        '2': {
                            type:    'String',
                            default: false,
                        },
                        '3': {
                            type:    'String',
                            default: false,
                        },
                    },
                    pluc:      {
                        type:    'String',
                        default: '0',
                    },
                    margin:    {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                    depth:     {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                },
                '46': {
                    absent:    {
                        type:    'Boolean',
                        default: false,
                    },
                    mobility:  {
                        type:    'String',
                        default: 0,
                    },
                    implant:   {
                        type:    'Boolean',
                        default: false,
                    },
                    furcation: {
                        type:    'String',
                        default: '0',
                    },
                    bleeding:  {
                        '1': {
                            type:    'String',
                            default: false,
                        },
                        '2': {
                            type:    'String',
                            default: false,
                        },
                        '3': {
                            type:    'String',
                            default: false,
                        },
                    },
                    pluc:      {
                        type:    'String',
                        default: '0',
                    },
                    margin:    {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                    depth:     {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                },
                '45': {
                    absent:   {
                        type:    'Boolean',
                        default: false,
                    },
                    mobility: {
                        type:    'String',
                        default: 0,
                    },
                    implant:  {
                        type:    'Boolean',
                        default: false,
                    },
                    bleeding: {
                        '1': {
                            type:    'String',
                            default: false,
                        },
                        '2': {
                            type:    'String',
                            default: false,
                        },
                        '3': {
                            type:    'String',
                            default: false,
                        },
                    },
                    pluc:     {
                        type:    'String',
                        default: '0',
                    },
                    margin:   {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                    depth:    {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                },
                '44': {
                    absent:   {
                        type:    'Boolean',
                        default: false,
                    },
                    mobility: {
                        type:    'String',
                        default: 0,
                    },
                    implant:  {
                        type:    'Boolean',
                        default: false,
                    },
                    bleeding: {
                        '1': {
                            type:    'String',
                            default: false,
                        },
                        '2': {
                            type:    'String',
                            default: false,
                        },
                        '3': {
                            type:    'String',
                            default: false,
                        },
                    },
                    pluc:     {
                        type:    'String',
                        default: '0',
                    },
                    margin:   {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                    depth:    {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                },
                '43': {
                    absent:   {
                        type:    'Boolean',
                        default: false,
                    },
                    mobility: {
                        type:    'String',
                        default: 0,
                    },
                    implant:  {
                        type:    'Boolean',
                        default: false,
                    },
                    bleeding: {
                        '1': {
                            type:    'String',
                            default: false,
                        },
                        '2': {
                            type:    'String',
                            default: false,
                        },
                        '3': {
                            type:    'String',
                            default: false,
                        },
                    },
                    pluc:     {
                        type:    'String',
                        default: '0',
                    },
                    margin:   {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                    depth:    {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                },
                '42': {
                    absent:   {
                        type:    'Boolean',
                        default: false,
                    },
                    mobility: {
                        type:    'String',
                        default: 0,
                    },
                    implant:  {
                        type:    'Boolean',
                        default: false,
                    },
                    bleeding: {
                        '1': {
                            type:    'String',
                            default: false,
                        },
                        '2': {
                            type:    'String',
                            default: false,
                        },
                        '3': {
                            type:    'String',
                            default: false,
                        },
                    },
                    pluc:     {
                        type:    'String',
                        default: '0',
                    },
                    margin:   {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                    depth:    {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                },
                '41': {
                    absent:   {
                        type:    'Boolean',
                        default: false,
                    },
                    mobility: {
                        type:    'String',
                        default: 0,
                    },
                    implant:  {
                        type:    'Boolean',
                        default: false,
                    },
                    bleeding: {
                        '1': {
                            type:    'String',
                            default: false,
                        },
                        '2': {
                            type:    'String',
                            default: false,
                        },
                        '3': {
                            type:    'String',
                            default: false,
                        },
                    },
                    pluc:     {
                        type:    'String',
                        default: '0',
                    },
                    margin:   {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                    depth:    {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                },

                '38': {
                    absent:    {
                        type:    'Boolean',
                        default: false,
                    },
                    mobility:  {
                        type:    'String',
                        default: 0,
                    },
                    implant:   {
                        type:    'Boolean',
                        default: false,
                    },
                    furcation: {
                        type:    'String',
                        default: '0',
                    },
                    bleeding:  {
                        '1': {
                            type:    'String',
                            default: false,
                        },
                        '2': {
                            type:    'String',
                            default: false,
                        },
                        '3': {
                            type:    'String',
                            default: false,
                        },
                    },
                    pluc:      {
                        type:    'String',
                        default: '0',
                    },
                    margin:    {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                    depth:     {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                },
                '37': {
                    absent:    {
                        type:    'Boolean',
                        default: false,
                    },
                    mobility:  {
                        type:    'String',
                        default: 0,
                    },
                    implant:   {
                        type:    'Boolean',
                        default: false,
                    },
                    furcation: {
                        type:    'String',
                        default: '0',
                    },
                    bleeding:  {
                        '1': {
                            type:    'String',
                            default: false,
                        },
                        '2': {
                            type:    'String',
                            default: false,
                        },
                        '3': {
                            type:    'String',
                            default: false,
                        },
                    },
                    pluc:      {
                        type:    'String',
                        default: '0',
                    },
                    margin:    {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                    depth:     {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                },
                '36': {
                    absent:    {
                        type:    'Boolean',
                        default: false,
                    },
                    mobility:  {
                        type:    'String',
                        default: 0,
                    },
                    implant:   {
                        type:    'Boolean',
                        default: false,
                    },
                    furcation: {
                        type:    'String',
                        default: '0',
                    },
                    bleeding:  {
                        '1': {
                            type:    'String',
                            default: false,
                        },
                        '2': {
                            type:    'String',
                            default: false,
                        },
                        '3': {
                            type:    'String',
                            default: false,
                        },
                    },
                    pluc:      {
                        type:    'String',
                        default: '0',
                    },
                    margin:    {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                    depth:     {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                },
                '35': {
                    absent:   {
                        type:    'Boolean',
                        default: false,
                    },
                    mobility: {
                        type:    'String',
                        default: 0,
                    },
                    implant:  {
                        type:    'Boolean',
                        default: false,
                    },
                    bleeding: {
                        '1': {
                            type:    'String',
                            default: false,
                        },
                        '2': {
                            type:    'String',
                            default: false,
                        },
                        '3': {
                            type:    'String',
                            default: false,
                        },
                    },
                    pluc:     {
                        type:    'String',
                        default: '0',
                    },
                    margin:   {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                    depth:    {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                },
                '34': {
                    absent:   {
                        type:    'Boolean',
                        default: false,
                    },
                    mobility: {
                        type:    'String',
                        default: 0,
                    },
                    implant:  {
                        type:    'Boolean',
                        default: false,
                    },
                    bleeding: {
                        '1': {
                            type:    'String',
                            default: false,
                        },
                        '2': {
                            type:    'String',
                            default: false,
                        },
                        '3': {
                            type:    'String',
                            default: false,
                        },
                    },
                    pluc:     {
                        type:    'String',
                        default: '0',
                    },
                    margin:   {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                    depth:    {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                },
                '33': {
                    absent:   {
                        type:    'Boolean',
                        default: false,
                    },
                    mobility: {
                        type:    'String',
                        default: 0,
                    },
                    implant:  {
                        type:    'Boolean',
                        default: false,
                    },
                    bleeding: {
                        '1': {
                            type:    'String',
                            default: false,
                        },
                        '2': {
                            type:    'String',
                            default: false,
                        },
                        '3': {
                            type:    'String',
                            default: false,
                        },
                    },
                    pluc:     {
                        type:    'String',
                        default: '0',
                    },
                    margin:   {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                    depth:    {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                },
                '32': {
                    absent:   {
                        type:    'Boolean',
                        default: false,
                    },
                    mobility: {
                        type:    'String',
                        default: 0,
                    },
                    implant:  {
                        type:    'Boolean',
                        default: false,
                    },
                    bleeding: {
                        '1': {
                            type:    'String',
                            default: false,
                        },
                        '2': {
                            type:    'String',
                            default: false,
                        },
                        '3': {
                            type:    'String',
                            default: false,
                        },
                    },
                    pluc:     {
                        type:    'String',
                        default: '0',
                    },
                    margin:   {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                    depth:    {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                },
                '31': {
                    absent:   {
                        type:    'Boolean',
                        default: false,
                    },
                    mobility: {
                        type:    'String',
                        default: 0,
                    },
                    implant:  {
                        type:    'Boolean',
                        default: false,
                    },
                    bleeding: {
                        '1': {
                            type:    'String',
                            default: false,
                        },
                        '2': {
                            type:    'String',
                            default: false,
                        },
                        '3': {
                            type:    'String',
                            default: false,
                        },
                    },
                    pluc:     {
                        type:    'String',
                        default: '0',
                    },
                    margin:   {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                    depth:    {
                        '1': {
                            type:    'String',
                            default: '0',
                        },
                        '2': {
                            type:    'String',
                            default: '0',
                        },
                        '3': {
                            type:    'String',
                            default: '0',
                        },
                    },
                },
            },
        },

    },

} );


exports.Chart = mongoose.model ( 'Periodontal', PeriodontalShema );