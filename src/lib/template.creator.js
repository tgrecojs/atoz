// Definitions
const Endo = run => ({
  run,
  concat: other => Endo(x => other.run(run(x))),
})

Endo.empty = () => Endo(x => x)
const template = `
		<div class="awesome" style="border: 1px solid red">
			<label for="name">Enter your name: </label>
			<input type="text" id="name" />
		</div>
	`

// Ex1: transforms regular html input to jsx syntax
// =========================

const classToClassName = html => html.replace(/class\=/gi, 'className=')

const updateStyleTag = html => html.replace(/style="(.*)"/gi, 'style={{$1}}')

const htmlFor = html => html.replace(/for=/gi, 'htmlFor=')

const ex1 = html =>
  [classToClassName]
    .reduce((acc, val) => acc.concat(Endo(val)), Endo.empty())
    .run(html)

const AwesomeTemplate = ex1(template)

export { AwesomeTemplate }
