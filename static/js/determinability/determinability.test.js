// file to test determinability-calculations.js

/**
 * @jest-environment jsdom
 */
//This is a necessary addition due to changes in Jest's default configuration

const { exportAllDeclaration } = require('@babel/types')
const { default: test } = require('node:test')
const { describe } = require('yargs')
const suspended = require('./viscosity-suspended')

beforeAll(() =>{



    let fs = require('fs')
    let fileContents = fs.readFileSync('templates/determinability.html', 'utf-8')

    document.open()
    document.write(fileContents)
    document.close()
})

describe('DOM Tests', () => {
    test('expects "Calculation results:" to display', () => {
        expect(document.getElementById('determinability-results')).toContain('Calculation')
    })
})

