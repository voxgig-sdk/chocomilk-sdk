package core

type ChocomilkError struct {
	IsChocomilkError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewChocomilkError(code string, msg string, ctx *Context) *ChocomilkError {
	return &ChocomilkError{
		IsChocomilkError: true,
		Sdk:              "Chocomilk",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *ChocomilkError) Error() string {
	return e.Msg
}
